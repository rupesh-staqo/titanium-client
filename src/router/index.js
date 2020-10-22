import Vue from 'vue'
import Router from 'vue-router'
// import store from "../store";

import Authenticated from '@/views/Authenticated/Layout'
import Dashboard from '../pages/Authenticated/Dashboard'
import Company from '../pages/Authenticated/Company'


Vue.use(Router)

// const ifNotAuthenticated = (to, from, next) => {
//   if (!store.getters.isAuthenticated) {
//     next();
//     return;
//   }
//   next("/");
// };

// const ifAuthenticated = (to, from, next) => {
//   if (store.getters.isAuthenticated) {
//     next();
//     return;
//   }
//   next("/login");
// };

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Authenticated,
    //   beforeEnter: ifAuthenticated,
      children: [
        {
          path: '',
          name: 'Dashboard',
          component: Dashboard,
        },
        {
          path: 'company',
          name: 'Company',
          component: Company,
        },
      ]
    },
    // {
    //   path: '/',
    //   component: Unauthenticated,
    //   beforeEnter: ifNotAuthenticated,
    //   children: [
    //     {
    //       path: 'login',
    //       component: Login,
    //     }
    //   ]
    // },
    // { path: "*", component: PageNotFound }
  ]
})
