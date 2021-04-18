import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import NotFound from '../views/animals/NotFound.vue'
import Animals from '../views/animals/Animals.vue'
import AnimalDetails from '../views/animals/AnimalDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/animals',
    name: 'Animals',
    component: Animals
  },
  {
    path: '/animals/:id',
    name: 'AnimalDetails',
    component: AnimalDetails,
    props: true
  },
  {
    path: '/all-animals',
    redirect: '/animals'
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
