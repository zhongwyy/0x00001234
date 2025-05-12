import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FaqView from '../views/FaqView.vue'
import DocsView from '../views/DocsView.vue'
import HomePageView from '../views/HomePageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePageView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: HomeView,
    },
    { path: '/faq', name: 'FAQ', component: FaqView },
    {
      path: '/docs',
      name: 'docs',
      component: DocsView,
    },
  ],
})

export default router
