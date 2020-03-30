import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../pages/index.vue'
import Detail from '../pages/detail.vue'
import About from '../pages/about.vue'
import Resume from '../pages/resume.vue'
// import Logo from '../components/logo.vue'
// import ArticleList from '../components/articleList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/article/:id',
    props: true,
    // props: route => ({ id: route.params.id }),
    component: Detail
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/resume',
    component: Resume
  }
]

const router = new VueRouter({
  routes
})

export default router
