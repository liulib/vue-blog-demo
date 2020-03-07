import Vue from 'vue'
// 配置axios
import axios from 'axios'
// axios.defaults.baseURL = 'http://127.0.0.1:12345/api/'
// Vue.prototype.$http = axios

const fetchArticleList = function (params) {
  const res = axios.get('/article', { params: params })
  return res
}

const fetchArticle = function (id) {
  const res = axios.get('/article/' + id + '/')
  return res
}

const fetchCategory = function () {
  const res = axios.get('/category')
  return res
}
export { fetchArticleList, fetchArticle, fetchCategory }
