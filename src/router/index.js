import Vue from 'vue';
import VueRouter from 'vue-router';
import Token from 'src/libs/token'

Vue.use(VueRouter);

// code-splitting component
const Welcome = () => import('views/Welcome');
const Home = () => import('views/Home');
const Parameter = () => import('views/Parameter');
const NotFound = () => import('views/404');

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Welcome,
      beforeEnter: redirectUserIfNeeded
    },
    {
      path: '/home',
      component: Home,
      //beforeEnter: protectRoute
    },
    {
      path: '/parameters',
      component: Parameter,
      beforeEnter: protectRoute
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});

function redirectUserIfNeeded(to, from, next) {
  Token.isLoggedIn().then(isLogged => {
    if (!isLogged) {
      next();
      return;
    }
    next('/home');
  }).catch(err => console.error(err));
}

function protectRoute(to, from, next) {
  Token.isLoggedIn().then(isLogged => {
    if (!isLogged) {
      next('/');
      return;
    }
    next();
  }).catch(err => console.error(err));
}


