// import Vue from 'vue'
// import Vuex from 'vuex'
// import axios from 'axios'
// // import AuthenticationService from '@/services/AuthenticationService.js'

// Vue.use(Vuex)


export default {
    strict: true,
    state: {
        token: null,
        user: null,
        // isUserLoggedIn: false
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        //     if (token) {
        //         state.isUserLoggedIn = true
        //     } else {
        //         state.isUserLoggedIn = false
        //     }
        },
        setUser(state, user) {
            state.user = user
        }
    },
    actions: {
        setToken({commit}, token) {
            commit('setToken', token)
        },
        setUser({commit}, user) {
            commit('setUser', user)
        }
    },
    getters: {
        isUserLoggedIn: state => !!state.token
    }
}

// export default{
//     strict: true,
//     state: {
//         token: localStorage.getItem('token') || '',
//         user: null
//     },
//     mutations: {
//         getLogin(state, token, user) {
//             state.token = token
//             state.user = user
//         },
//         auth_error(state) {
//             state.status = 'error'
//           },
//     },
//     actions: {
//         login({commit}, user){
//             return new axios.post('http://localhost:3001/login', user)
//               .then(resp => {
//                 const token = resp.data.token
//                 const user = resp.data.user
//                 localStorage.setItem('token', token)
//                 axios.defaults.headers.common['Authorization'] = token
//                 commit('getLogin', token, user)
//               })
//               .catch((error) => {
//                 commit('auth_error', {
//                     error: error.response.data
//                 } )
//               })
//         },
//         register({commit}, user){
//             return new axios.post('http://localhost:3001/register', user)
//               .then(resp => {
//                 const token = resp.data.token
//                 const user = resp.data.user
//                 localStorage.setItem('token', token)
//                 axios.defaults.headers.common['Authorization'] = token
//                 commit('getLogin', token, user)
//               })
//               .catch((error) => {
//                 commit('auth_error', {
//                     error: error.response.data
//                 } )
//               })
//         },
//     }
// }