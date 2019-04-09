import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList'
import Father from '@/components/father'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/father',
      name: 'Father',
      component: Father
    }
  ]
})
