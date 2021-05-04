import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: { name: 'mortgage' },
  },
  {
    path: '/mortgage',
    name: 'mortgage',
    component: () => import('../views/MortgageForm.vue'),
  },
  {
    path: '/payments',
    name: 'payments',
    component: () => import('../views/Payments.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
