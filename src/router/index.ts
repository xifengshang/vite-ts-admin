import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/views/layout/index.vue'

const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'home',
        meta: {
          title: '首页',
          icon: 'HomeFilled'
        }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    name: 'user',
    redirect: '/user/index',
    meta: {
      title: '用户管理',
      icon: 'Histogram'
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/user/index.vue'),
        name: 'userIndex',
        meta: {
          title: '用户管理-1',
          icon: 'Management'
        }
      },
      {
        path: 'manager',
        component: () => import('@/views/user/manager.vue'),
        name: 'userManager',
        meta: {
          title: '用户管理-2',
          icon: 'Message'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
