import Vue from 'vue';
import App from './components/app';
import Router from './router'; // router
import Store from './store'; // store

new Vue({
  el: '.app',
  router: Router,
  store: Store,
  render: h => h(App)
});
