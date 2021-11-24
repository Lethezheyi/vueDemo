import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/components/index'
import videoPage from '@/components/videoPage'
import screeningRoom from '@/components/screeningRoom'
import mine from '@/components/mine'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/videoPage',
    name: 'videoPage',
    component: videoPage
  },
  {
    path: '/screeningRoom',
    name: 'screeningRoom',
    component: screeningRoom
  },
  {
    path: '/mine',
    name: 'mine',
    component: mine
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
