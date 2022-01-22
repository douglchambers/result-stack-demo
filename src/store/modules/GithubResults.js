import { Octokit } from 'octokit';

// initial state
const state = () => ({
    githubResults: {},
    idsForSearch: [],
    totalResults: 0,
    previousSearches: []
})

// getters
const getters = {
    searchHistory: (state) => {
        return state.previousSearches;
    },
    results: (state) => {
        if (state.githubResults) {
            return state.githubResults;
        }
        return {};
    },
    resultsForSearch: (state) => {
        const results = [];
        state.idsForSearch.forEach((id) => {
            if (state.githubResults[id]) {
                results.push(state.githubResults[id]);
            }
        });
        return results;
    }
}

// actions
const actions = {
    async search({ commit, dispatch }, query, pageNum) {
        const octokit = new Octokit();
        // const res = await octokit.search.users({ username: query });
        const queryString = `"${ query }" in:login OR "${ query}" in:name OR "${ query }" in:email`;
        console.log('searching for: ', queryString);
        const q = queryString;
        // const id = '566990';
        const res = await octokit.request('GET /search/users', {
            q,
            page: pageNum,
        });

        const userResults = res.data.items;
        const numResults = res.data.total_count;

        commit('setTotalResults', numResults)
        const idsForSearch = [];
        userResults.forEach((ur) => {
            dispatch('getUserInfo', ur.id);
            idsForSearch.push(ur.id);
        });
        commit('setIdsForSearch', idsForSearch);
        commit('addSearchHistory', { query, numResults })
        // commit('setResults', res);
    },
    async getUserInfo({ commit, state }, userId) {
        if (state.githubResults[userId]) {
            // don't re-pull a result if we have it already
            return;
        }

        const octokit = new Octokit();
        const res = await octokit.request(`GET /user/${ userId }`);
        console.log('user query: ', res);
        if (res.data) {
            commit('setUserResult', res.data);
        }
    }
}
/*
{
    "login": "douglchambers",
    "id": 566990,
    "node_id": "MDQ6VXNlcjU2Njk5MA==",
    "avatar_url": "https://avatars.githubusercontent.com/u/566990?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/douglchambers",
    "html_url": "https://github.com/douglchambers",
    "followers_url": "https://api.github.com/users/douglchambers/followers",
    "following_url": "https://api.github.com/users/douglchambers/following{/other_user}",
    "gists_url": "https://api.github.com/users/douglchambers/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/douglchambers/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/douglchambers/subscriptions",
    "organizations_url": "https://api.github.com/users/douglchambers/orgs",
    "repos_url": "https://api.github.com/users/douglchambers/repos",
    "events_url": "https://api.github.com/users/douglchambers/events{/privacy}",
    "received_events_url": "https://api.github.com/users/douglchambers/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Doug Chambers",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 4,
    "public_gists": 1,
    "followers": 1,
    "following": 0,
    "created_at": "2011-01-16T01:57:17Z",
    "updated_at": "2022-01-22T15:51:36Z"
}
 */
// mutations
const mutations = {
    setUserResult(state,user) {
        const userObj = {
            id: user.id,
            username: user.login,
            profileUrl: user.html_url,
            avatarUrl: user.avatar_url,
            location: user.location || 'empty',
            name: user.name || 'empty',
            email: user.email || 'not public',
            bio: user.bio,
            numPublicRepos: user.public_repos,
            createdAt: user.created_at,
            lastUpdate: user.updated_at,
        }

        state.githubResults[user.id] = userObj;
    },
    setIdsForSearch(state, idsForSearch) {
        state.idsForSearch = idsForSearch;
    },
    setResults(state, { data }) {
        // should really parse through the results and validate them
        if (data.items.length > 0) {
            state.githubResults = data.items;
        } else {
            state.githubResults = [];
        }
    },
    setTotalResults(state, totalResults) {
        state.totalResults = totalResults;
    },
    addSearchHistory(state, { query, numResults }) {
        if (state.previousSearches) {
            const idx = state.previousSearches.findIndex((ps) => ps.query === query);
            if (idx > -1) {
                state.previousSearches.splice(idx, 1);
            }
            state.previousSearches.unshift({
                query,
                numResults,
            });
        } else {
            state.previousSearches = [{
                query,
                numResults,
            }];
        }
        console.log('previousSearches: ', state.previousSearches);
        if (state.previousSearches.length > 10) {
            state.previousSearches.slice(0, 10);
        }
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}