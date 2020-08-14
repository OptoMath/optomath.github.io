import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/geometry',
    name: 'Geometry',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Geometry.vue')
  },
  {
    path: '/algrebra-2',
    name: 'Algebra 2',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AlgebraTwo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
