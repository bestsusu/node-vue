import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/main'
import Login from '@/components/login'
import User from '@/components/user'
import pull from '@/base/scrollupAndDown'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/index',
    name: 'main',
    component: Main,
    children: [{
      path: 'user',
      component: User
    }]
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/pull',
    component: pull
  }, {
    path: '*',
    redirect: 'index'
  }]
})
