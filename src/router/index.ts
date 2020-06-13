import Vue from 'vue';
import VueRouter from 'vue-router';

import AppRouter from './app-router';

Vue.use(VueRouter);

const router = new AppRouter(process.env.BASE_URL || '/');

export default router;
