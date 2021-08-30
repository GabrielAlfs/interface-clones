import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@ui/pages/Home.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
