import Vue from 'vue'
import App from './App.vue'
import router from './router'
import moment from 'moment'
import api from './api/index' // 导入api接口
import '../src/assets/icon/iconfont.css'

Vue.filter('moment', function(value, formatString) {
  formatString = formatString || 'YYYY-MM-DD HH:mm'
  return moment(value).format(formatString) // value可以是普通日期 20170723
  // return moment.unix(value).format(formatString) // 这是时间戳转时间
})

Vue.config.productionTip = false
// 将api挂载到vue的原型上
Vue.prototype.$api = api

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
