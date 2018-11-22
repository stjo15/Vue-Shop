import Vue from 'vue';
import Router from 'vue-router';
/* import HelloWorld from '@/components/HelloWorld'; */
import Hem from '@/pages/Home';
import Varukorg from '@/pages/Cart';
// import Admin from '@/pages/Admin';

// Admin Components
import Index from '@/pages/admin/Index';
import New from '@/pages/admin/New';
import Products from '@/pages/admin/Products';
import Edit from '@/pages/admin/Edit';

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
      path: '/varukorg',
      name: 'Varukorg',
      component: Varukorg,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Index,
      children: [
        {
          path: 'ny',
          name: 'Ny',
          component: New,
        },
        {
          path: '',
          name: 'Produkter',
          component: Products,
        },
        {
          path: 'redigera/:id',
          name: 'Redigera',
          component: Edit,
        },
      ],
    },
  ],
});

