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
        const res = await octokit.rest.users.get({ username: query });
        console.log('got results: ', res);
        commit('addSearchHistory', query)
        commit('setResults', res);
    },
}

// mutations
const mutations = {
    setResults({ state }, res) {
        // should really parse through the results and validate them
        state.githubResults = res;
    },
    addSearchHistory({ state }, query) {
        state.previousSearches.unshift(query);
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}