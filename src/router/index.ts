import LocalCache from '@/utils/cache'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { firstMenu } from '@/utils/map-menus'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/main.vue'),
    children: []
  },
  {
    path: '/:pathMach(.*)*',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 导航守卫
router.beforeEach((to) => {
  if (to.path !== '/login') {
    // 判断是否登录
    if (!LocalCache.getCache('token')) {
      return '/login'
    }

    // 默认打开第一个
    if (to.path == '/main') {
      return firstMenu.path
    }
  }
})

export default router
