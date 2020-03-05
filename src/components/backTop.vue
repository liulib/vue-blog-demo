<template>
  <div>
    <!-- 返回顶部按钮 -->
    <div class="back-to-top" v-if="topFlag" @click="backTop">顶部</div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      topFlag: false
    }
  },
  computed: {},
  watch: {},
  methods: {
    scrollToTop () {
      const that = this
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 300) {
        that.topFlag = true
      } else {
        that.topFlag = false
      }
    },
    backTop () {
      document.body.scrollTop = document.documentElement.scrollTop = 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  }
}
</script>

<style lang='less' scoped>
.back-to-top {
  position: fixed;
  right: 137.5px;
  bottom: 30px;
  padding: 10px 15px 20px 15px;
  width: 15px;
  height: 15px;
  background: #42b983;
  font-size: 12px;
  opacity: 1;
  color: #fff;
  cursor: pointer;
  text-align: center;
  transition-property: bottom;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 1s;
}

@media only screen and (max-width: 768px) {
  .back-to-top {
    display: none;
  }
}
</style>
