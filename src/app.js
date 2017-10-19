import Vue from 'vue';
import App from './components/app';
import Router from './router'; // router

new Vue({
  el: '.app',
  router: Router,
  render: h => h(App)
});
