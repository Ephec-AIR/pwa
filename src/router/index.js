import Vue from 'vue';
import VueRouter from 'vue-router';
import idbKeyVal from 'idb-keyval'; // indexDB

Vue.use(VueRouter);

// code-splitting component
const Welcome = () => import('components/Welcome');
const Home = () => import('components/Home');
const Parameter = () => import('components/Parameter');

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Welcome
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/parameters',
      component: Parameter
    }
  ]
});
