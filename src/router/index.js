import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () =>
  import(
    /* webpackChunkName: "group-index-detail-about" */ '../pages/index.vue'
  )
const Detail = () =>
  import(
    /* webpackChunkName: "group-index-detail-about" */ '../pages/detail.vue'
  )
const About = () =>
  import(
    /* webpackChunkName: "group-index-detail-about" */ '../pages/about.vue'
  )
const Resume = () =>
  import(/* webpackChunkName: "group-resume" */ '../pages/resume.vue')

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
