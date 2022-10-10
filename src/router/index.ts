import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainView from "@/views/MainView.vue";
import EditProductView from "@/views/EditProductView.vue"
import LoginView from "@/views/LoginView.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/edit',
    name: 'edit product',
    component: EditProductView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
