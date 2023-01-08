import { createRouter, createWebHashHistory } from "vue-router";

// 公共路由表: 所有用户都等访问的页面
const publicRoute = [
  {
    path: '/',
    component: () => import('@/views/layout/index.vue')
  },
  {
    path: '/login',
    component:()=> import('@/views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes:publicRoute
});

export default router;
