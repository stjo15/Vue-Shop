import Vue from 'vue';
import Router from 'vue-router';
/* import HelloWorld from '@/components/HelloWorld'; */
import Hem from '@/pages/Home';
import Varukorg from '@/pages/Cart';
import Admin from '@/pages/Admin';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hem',
      component: Hem,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
    },
    {
      path: '/varukorg',
      name: 'Varukorg',
      component: Varukorg,
    },
  ],
});

