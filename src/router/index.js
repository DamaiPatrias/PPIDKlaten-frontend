import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/BerandaView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/permohoan_informasi',
    name: 'permohoan_informasi',
    component: () => import('../views/PermohonanView.vue')
  },
  {
    path: '/keberatan_informasi',
    name: 'keberatan_informasi',
    component: () => import('../views/KeberatanView.vue')
  },
  {
    path: '/informasi_berkala',
    name: 'informasi_berkala',
    component: () => import('../views/BerkalaView.vue')
  },
  {
    path: '/informasi_serta_merta',
    name: 'informasi_serta_merta',
    component: () => import('../views/SertaMertaView.vue')
  },
  {
    path: '/informasi_setiap_saat',
    name: 'informasi_setiap_saat',
    component: () => import('../views/SetiapSaatView.vue')
  },
  {
    path: '/profil',
    name: 'profil',
    component: () => import('../views/ProfilView.vue')
  },
  {
    path: '/dokumen',
    name: 'dokumen',
    component: () => import('../views/DokumenView.vue')
  },
  {
    path: '/ppid_pembantu',
    name: 'ppid_pembantu',
    component: () => import('../views/PPIDPembantuView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TentangKamiView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
