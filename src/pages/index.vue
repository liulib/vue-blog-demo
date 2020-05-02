<template>
  <div>
    <!-- 头部区域 -->
    <l-header @getCate="getCategory"></l-header>
    <!-- 主体区域 -->
    <main class="main">
      <l-logo></l-logo>
      <l-articleList v-for="item in articleListData" :key="item.id" :articleData="item"></l-articleList>
      <!-- 分页组件 -->
      <l-pagination :paginationData="paginationData" @getPage="getPagination"></l-pagination>
    </main>
    <!-- footer区域 -->
    <l-footer></l-footer>
    <l-backTOP></l-backTOP>
  </div>
</template>

<script>
import temHeader from '../components/header.vue'
import temFooter from '../components/footer.vue'
import temLogo from '../components/logo.vue'
import temBackTOP from '../components/backTop.vue'
import temArticleList from '../components/articleList.vue'
import temPagination from '../components/pagination.vue'

export default {
  name: 'index',
  data: function() {
    return {
      articleListData: [],
      paginationData: [],
      options: {}
    }
  },
  components: {
    'l-header': temHeader,
    'l-footer': temFooter,
    'l-logo': temLogo,
    'l-backTOP': temBackTOP,
    'l-articleList': temArticleList,
    'l-pagination': temPagination
  },
  methods: {
    async getArticleList() {
      try {
        const res = await this.$api.operations.fetchArticleList(this.options)
        // 获取分页相关数据
        this.paginationData = res.page_links
        // 获取文章数据
        this.articleListData = res.result
      } catch (error) {
        alert(error)
      }
    },
    getPagination(val) {
      this.options.page = val
      this.getArticleList()
    },
    getCategory(val) {
      this.options = {}
      this.options.category = val
      this.getArticleList()
    }
  },
  created() {
    this.options = {}
    this.getArticleList()
  },
  computed: {}
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
