<template>
  <div>
    <temHeader></temHeader>
    <main class="main">
      <p>
        哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒
        哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒
        哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒哒
      </p>
      <hr />
      <div class="nav-links">
        <a href="https://github.com/liulib" target="_blank">github</a>
        <a href>resume</a>
        <a href>wechat</a>
        <a href>qq</a>
      </div>
    </main>
    <temFooter></temFooter>
    <temBackTOP></temBackTOP>
  </div>
</template>

<script>
import temHeader from '../components/header.vue'
import temFooter from '../components/footer.vue'
import temBackTOP from '../components/backTop.vue'

export default {
  components: {
    temHeader: temHeader,
    temFooter: temFooter,
    temBackTOP: temBackTOP
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  methods: {}
}
</script>
<style lang='less' scoped>
.main {
  width: 700px;
  margin: auto;
  margin-top: 71px;
  margin-bottom: 30px;
  .nav-links {
    text-align: center;
    a {
      text-decoration: none;
      margin: 1rem;
      color: #01aaed;
    }
  }
}

@media only screen and (max-width: 768px) {
  .main {
    width: auto;
  }
}
</style>
