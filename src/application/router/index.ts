import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@ui/pages/Home.vue'),
  },
  {
    path: '/spotify',
    name: 'Spotify',
    component: () => import('@ui/pages/spotify/Spotify.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
