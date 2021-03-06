import Vue from 'vue';
import VueRouter from 'vue-router';
import Token from 'src/libs/token'

Vue.use(VueRouter);

// code-splitting component
const Welcome = () => import('views/Welcome');
const Home = () => import('views/Home');
const Parameter = () => import('views/Parameter');
const Admin = () => import('views/Admin');
const NotFound = () => import('views/404');

const router = new VueRouter({
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
      beforeEnter: protectRoute
    },
    {
      path: '/parameters',
      component: Parameter,
      beforeEnter: protectRoute
    },
    {
      path: '/admin',
      component: Admin,
      beforeEnter: protectRoute
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});

router.afterEach(pullUpMenuIfNeeded);

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

function pullUpMenuIfNeeded(to, from) {
  if (document.querySelector('.air-nav').classList.contains('air-nav--visible')) {
    document.querySelector('.air-nav').classList.remove('air-nav--visible');
  }
}

export default router;

