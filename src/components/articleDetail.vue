<template>
<div>
        <div class="content">
            <article class="blog-post">
                    <div class="blog-post-body">
                            <h2><a href="/articles/detail/31/">{{articleData.title}}</a></h2>
                            <div class="post-meta">
                            <span>分类于 {{ articleData.category }}</span>&nbsp;|&nbsp;
                            <span>发表于 {{ articleData.update_time }}</span>&nbsp;|&nbsp;
                            <span>评论数 </span>&nbsp;|&nbsp;
                            <span>阅读数 {{ articleData.read_nums }}</span>
                            </div>
                            <div class="blog-post-text">
                            <p>{{articleData.content}}</p>
                            </div>
                    </div>
            </article>
        </div>
</div>
</template>

<script>
export default {
  props: ['articleData'],
  components: {},
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  methods: {
  }
}
</script>
<style lang='less' scoped>
.content {
  margin-top: 120px;
  .blog-post {
  text-align: center;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid #cecece;
  h2 {
  color: #273849;
  margin: 0;
  padding: 0px 0px 20px;
  font-size: 2rem;
  line-height: 49px;
  }
  a {
  text-decoration: none;
  color: #304455
  }
  .post-meta {
  margin-bottom: 20px;
  color: #B1B1B1;
}
  .blog-post-text {
  text-align: left;
  }
}
}
</style>
