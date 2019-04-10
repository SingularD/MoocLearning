import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Demo1 from '@/components/demo1'
import Demo2 from '@/components/demo2'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/demo1',
      name: Demo1,
      component: Demo1
    },
    {
      path: '/demo2/:id',
      name: 'Demo2',
      component: Demo2
    },
    {
      path: '/demo2',
      name: 'Demo2',
      component: Demo2
    }
  ]
})
