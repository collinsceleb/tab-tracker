import Vue from 'vue'
import Vuex from 'vuex'

import authenticationModule from './modules/authentication'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        authenticationModule,
    }
})

export default store;