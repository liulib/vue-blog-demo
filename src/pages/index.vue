<template>
  <div>
    <!-- 头部区域 -->
    <l-header></l-header>
    <!-- 主体区域 -->
    <main class="main">
      <l-logo></l-logo>
      <l-articleList></l-articleList>
      <l-articleList></l-articleList>
      <l-articleList></l-articleList>
      <l-articleList></l-articleList>
    </main>
    <!-- footer区域 -->
   <l-footer></l-footer>
   <l-backTOP></l-backTOP>
</div>
</template>

<script>
import header from '../components/header.vue'
import footer from '../components/footer.vue'
import logo from '../components/logo.vue'
import backTOP from '../components/backTop.vue'
import articleList from '../components/articleList.vue'
// import { GetArticleList } from '../utils/server.js'

export default {
  name: 'index',
  data: function () {
    return {
      articleList: ''
    }
  },
  components: {
    'l-header': header,
    'l-footer': footer,
    'l-logo': logo,
    'l-backTOP': backTOP,
    'l-articleList': articleList
  },
  created: async function () {
    // GetArticleList('article', function (message) {
    //   this.articleList = message
    // })
    // this.$http.get('/article').then(num => {
    //   this.articleList = num.data
    // })
    const res = await this.$http.get('/article')
    this.articleList = res.data.result
  }
}

</script>

<style lang="less" scoped>

.main {
  width: 700px;
  margin: auto;
  margin-top: 71px;
  margin-bottom: 30px;
}

@media only screen and (max-width: 768px) {
  .main {
    width: auto;
  }
}
</style>
