import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainPage from "@/views/MainPage.vue";
import EditProduct from "@/views/EditProduct.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/edit',
    name: 'edit product',
    component: EditProduct
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
