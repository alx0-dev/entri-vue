import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingView
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('../views/RegistrationView.vue')
    },
    {
      path: '/ending',
      name: 'ending',
      component: () => import('../views/EndingView.vue')
    }
  ]
})

export default router
