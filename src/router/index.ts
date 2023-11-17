import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('@/views/CategoriesView.vue')
    },
    {
      path: '/product/:id(\\d+)',
      name: 'product',
      component: () => import('@/views/ProductView.vue')
    },
    {
      path: '/category/:category([a-zA-Z]+)',
      name: 'category',
      component: () => import('@/views/CategoryView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/CartView.vue')
    }
  ]
})

export default router
