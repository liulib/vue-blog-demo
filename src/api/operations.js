/**
 * 基本操作模块接口列表
 */

import base from './base' // 导入接口域名列表
import axios from '@/utils/http' // 导入http中创建的axios实例

const operations = {
  fetchArticleList(params) {
    return axios.get(`${base.blog}/article/`, { params: params })
  },

  fetchArticle(id) {
    return axios.get(`${base.blog}/article/` + id + '/')
  },

  fetchCategory() {
    return axios.get(`${base.blog}/category/`)
  }
}

export default operations
