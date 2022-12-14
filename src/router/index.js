import { createRouter, createWebHistory } from 'vue-router'
import DetailsMovieView from '@/views/DetailsMovieView.vue'
import DetailsTvView from '@/views/DetailsTvView.vue'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import SearchView from '@/views/SearchView.vue'
import SeriesView from '@/views/SeriesView.vue'
import SignUpView from '@/views/SignUpView.vue'

import SearchResponse from '@/components/SearchResponse.vue'

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
    path: '/detailsTv/:id',
    name: 'details-tv',
    component: DetailsTvView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUpView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView,
    children: [
      {
        path: '/search',
        name: 'searchType',
        props: true,
        components: {
          searchType: SearchResponse
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
