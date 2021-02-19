import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/index.vue'),
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import('@/pages/article/index.vue'),
  },
  {
    path: '/article/:id',
    name: 'ArticleDetail',
    component: () => import('@/pages/article/detail.vue'),
  },
];

export default routes;
