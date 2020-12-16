import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import vuetify from './plugins/vuetify';
import store from './store'
// import { sync } from 'vuex-router-sync'
import Axios from 'axios'

Vue.config.productionTip = false

// sync(store, router, {moduleName: 'AuthenticationModule'})

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}


new Vue({
  render: h => h(App),
  store,
  vuetify,
  router,
}).$mount('#app')
