import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import Calc from '../views/Calc.vue'
import Graph from '../views/Graph.vue'
import User from '../views/User.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Home
  },
  {
    path: '/details',
    name: 'Details',
    component: Details
  },
  {
    path: '/calc',
    name: 'Calc',
    component: Calc
  },
  {
    path: '/graph',
    name: 'Graph',
    component: Graph
  },
  {
    path: '/user',
    name: 'User',
    component: User
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
