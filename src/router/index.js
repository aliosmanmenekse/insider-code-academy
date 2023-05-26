import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../Login.vue'
import UserCreate from '../UserCreate.vue'
import UserList from '../UserList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/user-create',
    name: 'UserCreate',
    component:UserCreate
  },
  {
    path: '/user-list',
    name: 'UserList',
    component:UserList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
