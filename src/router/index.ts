import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainView from "@/views/ProductsView.vue";
import EditProductView from "@/views/ProductEditView.vue"
import LoginView from "@/views/LoginView.vue"
import SignupView from "@/views/SignupView.vue"

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
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
