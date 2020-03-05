import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/index.vue'
// import Logo from '../components/logo.vue'
// import ArticleList from '../components/articleList.vue'

Vue.use(VueRouter)

const routes = [
  {
    mode: 'hash',
    path: '/',
    components: {
      default: Index
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
