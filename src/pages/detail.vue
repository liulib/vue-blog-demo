<template>
  <div>
    <!-- 头部区域 -->
    <l-header></l-header>
    <!-- 主体区域 -->
    <main class="main">
      <l-article :articleData="article"></l-article>
    </main>
    <!-- footer区域 -->
    <l-footer></l-footer>
    <l-backTOP></l-backTOP>
  </div>
</template>

<script>
import temHeader from '../components/header.vue'
import temFooter from '../components/footer.vue'
import temBackTOP from '../components/backTop.vue'
import temArticleDetail from '../components/articleDetail.vue'

export default {
  name: 'detail',
  props: ['id'],
  data: function() {
    return {
      article: {}
    }
  },
  components: {
    'l-header': temHeader,
    'l-footer': temFooter,
    'l-backTOP': temBackTOP,
    'l-article': temArticleDetail
  },
  methods: {
    async getArticle(id) {
      try {
        const res = await this.$api.operations.fetchArticle(id)
        this.article = res
      } catch (error) {
        alert(error)
      }
    }
  },
  created() {
    this.getArticle(this.id)
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
