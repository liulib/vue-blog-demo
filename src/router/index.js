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
    component: Index,
    meta: {
      // 页面标题title
      title: '首页'
    }
  },
  {
    path: '/article/:id',
    props: true,
    name: 'Detail',
    component: Detail,
    meta: {
      // 页面标题title
      title: '详情页'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      // 页面标题title
      title: '关于'
    }
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume,
    meta: {
      // 页面标题title
      title: '简历'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
