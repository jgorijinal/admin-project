import router from './router';
import store from '@/store'

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  if (store.getters.token) {
    // 已登录
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // 未登录
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login') 
    }
  }
});