import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import authenticationModule from './modules/authentication'
import songsModule from './modules/songs'

Vue.use(Vuex)

const store = new Vuex.Store({
    
    modules: {
        authenticationModule,
        songsModule
    },
    plugins: [createPersistedState()],
})

export default store;