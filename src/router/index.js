import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import("@/views/HomeView.vue")
const JobResultsView = () => 
  import(/* webpackChunkName: "jobs" */ "@/views/JobResultsView.vue")
const JobView = () => 
  import(/* webpackChunkName: "jobs" */ "@/views/JobView.vue")

const TeamsView = () => 
  import(/* webpackChunkName: "jobs" */ "@/views/TeamsView.vue")

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/jobs/results',
    name: 'JobResults',
    component: JobResultsView
  },
  {
    path: '/jobs/results/:id',
    name: 'JobsListing',
    component: JobView
  },
  {
    path: '/teams',
    name: 'Teams',
    component: TeamsView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
      behavior: "smooth"
    }
  }
})

export default router
