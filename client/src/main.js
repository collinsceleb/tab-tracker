import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import vuetify from './plugins/vuetify';
import store from './store'
import { sync } from 'vuex-router-sync'
import Axios from 'axios'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Panel from './components/globals/Panel'



Vue.component('panel', Panel)
Vue.use(VueYouTubeEmbed)
// if you don't want install the component globally
// Vue.use(VueYouTubeEmbed, { global: false })
// if you want to install the component globally with a different name
// Vue.use(VueYouTubeEmbed, { global: true, componentId: "youtube-media" })

Vue.config.productionTip = false

sync(store, router)

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
