import Vue from "vue";
import Vuex from 'vuex'
import GithubResults from './modules/GithubResults'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        GithubResults,
    },
    strict: debug,
    plugins: []
})