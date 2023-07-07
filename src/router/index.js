import { createRouter, createWebHistory } from 'vue-router';

import cuaca from '../components/cuaca.vue';
import lokasi from '../components/lokasi.vue';
import waktu from '../components/waktu.vue';
import foto from '../components/foto.vue';
import Home from'../components/Home.vue'

const routes = [
  { path: '/weather', component: cuaca },
  { path: '/location', component: lokasi },
  { path: '/stopwatch', component: waktu },
  { path: '/photo', component: foto },
  {path: '/', component: Home},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;