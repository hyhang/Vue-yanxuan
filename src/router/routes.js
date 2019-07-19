import Home from '../views/Home/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/cateList',
    name: 'CateList',
    component: () => import('../views/CateList.vue')
  },
  {
    path: '/topic',
    name: 'Topic',
    component: () => import('../views/Topic.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart/Cart.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]