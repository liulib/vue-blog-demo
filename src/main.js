import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'

Vue.filter('moment', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD HH:mm'
  return moment(value).format(formatString) // value可以是普通日期 20170723
  // return moment.unix(value).format(formatString) // 这是时间戳转时间
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
