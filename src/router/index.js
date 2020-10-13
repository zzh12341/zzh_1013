import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import addMylist from '../views/addMylist'
import tabs from '../views/tabs'
import echartsList from '../views/echartsList'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addMylist',
    name: 'addMylist',
    component: addMylist
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: tabs
  },
  {
    path: '/echartsList',
    name: 'echartsList',
    component: echartsList
  },
  
]

const router = new VueRouter({
  routes
})

export default router
