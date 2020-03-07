<template>
  <div>
    <div class="content">
      <article class="blog-post">
        <div class="blog-post-body">
          <h2>
            <a :href="'#/article/' + articleData.id ">{{ articleData.title }}</a>
          </h2>
          <div class="post-meta">
            <span>分类于 {{ articleData.category }}</span>&nbsp;|&nbsp;
            <span>发表于 {{ articleData.update_time }}</span>&nbsp;|&nbsp;
            <span>评论数 </span>&nbsp;|&nbsp;
            <span>阅读数 {{ articleData.read_nums }}</span>
          </div>
          <p>
            {{articleData.brief}}
          </p>
          <div class="read-more">
            <a :href="'#/article/' + articleData.id ">继续查看</a>
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
  a {
    text-decoration: none;
    color: #304455
  }
}

.blog-post .post-meta {
  margin-bottom: 20px;
  color: #B1B1B1;
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
