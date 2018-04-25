import Vue from 'vue'
import Router from 'vue-router'
//@ts-ignore
import Vue2TouchEvents from 'vue2-touch-events'
import Landing from '@/components/Landing.vue'

Vue.use(Router);
Vue.use(Vue2TouchEvents);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Landing
    }
  ]
})
