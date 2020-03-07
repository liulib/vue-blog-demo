import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// axios.defaults.baseURL = 'http://127.0.0.1:12345/api/'
// Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
