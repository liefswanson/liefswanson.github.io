import Vue from 'vue';
import Router from 'vue-router';
//@ts-ignore
import Vue2TouchEvents from 'vue2-touch-events';
import Home from '@/components/main/Home.vue';

Vue.use(Router);
Vue.use(Vue2TouchEvents);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
