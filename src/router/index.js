import Vue from 'vue'
import Router from 'vue-router'
import store from "../store";


import Unauthenticated from '@/views/Unauthenticated/Layout'
import Login from '@/pages/Unauthenticated/Login'


import Authenticated from '@/views/Authenticated/Layout'
import EmptyLayout from '@/views/Authenticated/EmptyLayout'
import Dashboard from '../pages/Authenticated/Dashboard'
import Company from '../pages/Authenticated/Company/Index'
import CompanyView from '../pages/Authenticated/Company/View'


Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/");
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/login");
};

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Authenticated,
      beforeEnter: ifAuthenticated,
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: Dashboard,
        },
        {
          path:'company',
          component: EmptyLayout,
          children:[
            {
              path:'',
              component: Company,
              name:'company',
            },
            {
              path:':id',
              component: CompanyView
            }
          ]
        }
      ]
    },
    {
      path: '/',
      component: Unauthenticated,
      beforeEnter: ifNotAuthenticated,
      children: [
        {
          path: 'login',
          component: Login,
        }
      ]
    },
    // { path: "*", component: PageNotFound }
  ]
})
