import { Octokit } from 'octokit';

// initial state
const state = () => ({
    githubResults: [],
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
        return [];
    },
}

// actions
const actions = {
    async search({ commit }, query) {
        const octokit = new Octokit();
        // const res = await octokit.search.users({ username: query });
        const queryString = `"${ query }" in:login OR "${ query}" in:name OR "${ query }" in:email`;
        console.log('searching for: ', queryString);
        // const q = encodeURIComponent(queryString);
        const q = queryString;
        const res = await octokit.request('GET /search/users', {
            q
        });
        console.log('got results: ', res.data);
        commit('addSearchHistory', query)
        commit('setResults', res);
    },
}

// mutations
const mutations = {
    setResults(state, { data }) {
        // should really parse through the results and validate them
        if (data.items.length > 0) {
            state.githubResults = data.items;
        } else {
            state.githubResults = [];
        }
    },
    addSearchHistory(state, query) {
        if (state.previousSearches) {
            return state.previousSearches.unshift(query);
        }
        state.previousSearches = [query];
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}