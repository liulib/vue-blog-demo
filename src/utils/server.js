import Vue from 'vue'
// 配置axios
import axios from 'axios'
// axios.defaults.baseURL = 'http://127.0.0.1:12345/api/'
Vue.prototype.$http = axios

const GetArticleList = (url, callback) => {
  Vue.$http.get(url).then(num => {
    callback && callback(num.data)
  })
}

export { GetArticleList }
