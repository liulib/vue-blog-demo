<template>
  <div>
    <temHeader></temHeader>
    <main class="main">
      <p>路明非是个穷孩子，他很怂他很欠他很不霸气，但他从未吝啬过付出。路明非是个很穷的孩子，他的领地很小很小，只有那几个真正在乎他的人、看得上他的人、愿意帮助他的朋友，谁侵犯到了这些东西，他就会挺身而出。</p>
      <hr />
      <div class="nav-links">
        <a href="https://github.com/liulib" target="_blank">github</a>
        <a href="http://www.liulib.com">resume</a>
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
