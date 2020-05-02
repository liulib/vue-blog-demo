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
    name: 'Index',
    component: Index
  },
  {
    path: '/article/:id',
    props: true,
    name: 'Detail',
    component: Detail
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  }
]

const router = new VueRouter({
  routes
})

export default router
