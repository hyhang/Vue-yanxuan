import Home from '../views/Home/Home.vue'

export default [
  {
    path: '/',
    component: Home,
    meta: {
      isShow:true
    }
  },
  {
    path: '/cateList',
    meta: {
      isShow:true
    },
    component: () => import('../views/CateList/CateList.vue'),
    children: [
      {
        path: "/cateList/category",
        query: {id:'1022001'},
        meta: {
          isShow:true
        },
        component: () => import('../views/CateList/Categories/Category/Category.vue')
      },
      {
        path: "",
        redirect: '/cateList/category'
      }
    ]
  },
  {
    path: '/topic',
    meta: {
      isShow:true
    },
    component: () => import('../views/Topic/Topic.vue'),
    children: [
      {
        path: '/topic/:index',
        name: 'topicIndex',
        meta: {
          isShow:true
        },
        component: () => import('../views/Topic/Find/index.vue')
      },
      {
        path: '',
        redirect: '/topic/0'
      }
    ]
  },
  {
    path: '/expert',
    meta: {
      isShow:false
    },
    component: () => import('../views/Expert/Expert.vue')
  },
  {
    path: '/cart',
    meta: {
      isShow:true
    },
    component: () => import('../views/Cart/Cart.vue')
  },
  {
    path: '/login',
    meta: {
      isShow:false
    },
    component: () => import('../views/Login/Login.vue')
  }
]