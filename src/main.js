import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const router = new VueRouter({ mode: 'history' });
new Vue(Vue.util.extend({ router })).$mount('#app');