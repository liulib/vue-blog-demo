<template>
<div>
  <nav>
    <!-- 不加v-if就会直接渲染，此时还未拿到数据，会报错 -->
    <div class="pagination" v-if="paginationData.page_list">
      <a @click.prevent="sendPagination(paginationData.page_list[0])">首页</a>
      <a :key=index v-for="(item, index) in paginationData.page_list" :class="{'current-page':item == paginationData.page_number}" @click.prevent="sendPagination(item)">{{item}}</a>
      <a @click.prevent="sendPagination(paginationData.page_list.slice(-1)[0])">尾页</a>
      <a @click.prevent>共{{ paginationData.page_list.length }}页</a>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  props: ['paginationData'],
  components: {},
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  methods: {
    sendPagination (val) {
      this.$emit('getPage', val)
    }
  },
  created () {
    console.log(this.paginationData + '"123"')
  },
  mounted () {
    console.log(this.paginationData + '"456"')
  }
}
</script>
<style lang='less' scoped>
nav {
  text-align: center;
}

.pagination a {
  display: inline-block;
  line-height: 38px;
  padding: 0 15px;
  margin-right: 4px;
  text-align: center;
  background-color: #fff;
  user-select: none;
  cursor: pointer;
  font-size: 14px;
  border: 1px solid #d7dde4;
  border-radius: 4px;
  transition: all 0.2s;
  text-decoration: none;
  color: #273849;
}

.pagination a:hover {
  border: 1px solid #42b983;
}

.pagination .current-page {
  color: white;
  background-color: #42b983;
}

.pagination .current-page:hover {
  color: white;
  border: 1px solid #42b983;
}
</style>
