import { createRouter, createWebHistory } from 'vue-router'
import DetailsMovieView from '../views/DetailsMovieView.vue'
import DetailsSerieView from '../views/DetailsSerieView.vue'
import HomeView from '../views/HomeView.vue'
import SeriesView from '../views/SeriesView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/series',
    name: 'series',
    component: SeriesView
  },
  {
    path: '/detailsMovie/:id',
    name: 'details-movie',
    component: DetailsMovieView
  },
  {
    path: '/detailsSerie/:id',
    name: 'details-serie',
    component: DetailsSerieView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
