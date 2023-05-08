import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';

const routes = [
  { path: '/', component: HomeView },
  {
    path: '/destination/:id/:slug',
    name: 'destination',
    props: true,
    component: () => import('@/views/Destination.vue'),
    children: [
      {
        path: ':experienceSlug',
        name: 'experience',
        props: true,
        component: () => import('@/views/Experience.vue')
      },
    ]
  },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes,
  linkActiveClass: 'nav-active-link'
})

export default router;