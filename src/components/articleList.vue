<template>
  <div>
    <div class="content">
      <article class="blog-post">
        <div class="blog-post-body">
          <h2>
            <a href="/articles/detail/31/">ES6统计</a>
          </h2>
          <div class="post-meta">
            <span>分类于 liulib</span>&nbsp;|&nbsp;
            <span>发表于 2020年2月27日12:19</span>&nbsp;|&nbsp;
            <span>评论数 0</span>&nbsp;|&nbsp;
            <span>阅读数 4</span>
          </div>
          <p>
            我一直对前端需要「熟悉」浏览器缓存是持疑问态度的，因为前端无法控制缓存，即无法通过代码或者某种方式来指定某些资源是否需要缓存。
            举个例子，我们的 index.html 文件中引入了 bundle.js 这个文件，我们希望在每次刷新页面时，都不要使用缓存，每次都去服务器获取最新的 bundle.js 文件。
            要实现这个需求，只从前端的角度来思考，怎么做？
            或许有人会说 meta 标签支持指定 Cache-Control，但这是针对全站资源，如果只是针对特定的资源如 bundle.js 获取最新的
            似乎是无法实现的。那什么角色应该了解这些内容呢？
          </p>
          <div class="read-more">
            <a href="/articles/detail/31/">继续查看</a>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {}
}
</script>

<style lang='less' scoped>
.content {
  margin-top: 30px;
  nav {
    text-align: center;
  }
}

.blog-post {
  text-align: center;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid #cecece;
}

.blog-post h2 {
  color: #273849;
  margin: 0;
  padding: 0px 0px 20px;
  font-size: 2rem;
  line-height: 49px;
}

.blog-post .post-meta {
  margin-bottom: 20px;
}

.blog-post p {
  text-align: justify;
  font-size: 1rem;
  font-weight: 350;
  line-height: 30px;
  color: #304455;
}

.blog-post-body {
  padding: 0 1rem;
}

.blog-post .read-more a {
  display: inline-block;
  padding: 12px 40px;
  margin-top: 14px;
  border: 1px solid;
  border-radius: 25px;
  border-color: #e6e6e6;
  background-color: #3eaf7c;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1.7px;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.post-meta a:hover {
  border-bottom: 3px solid #42b983;
}

.read-more a:hover {
  background-color: #4abf8a;
}
</style>
