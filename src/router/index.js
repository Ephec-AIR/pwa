import Vue from 'vue';
import VueRouter from 'vue-router';
import idbKeyVal from 'idb-keyval'; // indexDB
import decode from 'jwt-decode';

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
      component: Home,
      beforeEnter: protectRoute
    },
    {
      path: '/parameters',
      component: Parameter,
      beforeEnter: protectRoute
    }
  ]
});

function protectRoute(to, from, next) {
  isLoggedIn().then(isLogged => {
    if (!isLogged) {
      return;
    }
    next();
  }).catch(_ => {});
}

function isLoggedIn() {
  return idbKeyVal.get('token').then(token => {
    return !!token && !isTokenExpired(token);
  });
}

function getTokenExpirationDate(encodedToken) {
  const token = decode(encodedToken);
  if (!token.exp) {
    return null;
  }

  const date = new Date(0);
  date.setUTCSeconds(token.exp);
  return date;
}

function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}
