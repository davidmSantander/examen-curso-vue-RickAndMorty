import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path:'/character/:id',
    name: 'Character',
    component: () => import('../views/Character.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
