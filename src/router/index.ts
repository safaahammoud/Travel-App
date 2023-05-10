import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue';

const routes = [
  { path: '/', component: Home },
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