import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import QuestionPage from '@/pages/QuestionPage.vue'

const routes = [
  // other routes...
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/:category/questions/:id',
    name: 'QuestionPage',
    component: QuestionPage,
  }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;