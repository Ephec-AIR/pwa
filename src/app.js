import Vue from 'vue';
import App from './components/app';
import Router from './router'; // router
import Store from './store'; // store
import VeeValidate from 'vee-validate'; // form validator

Vue.use(VeeValidate);

new Vue({
  el: '.app',
  router: Router,
  store: Store,
  render: h => h(App)
});

// Register SW
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  navigator.serviceWorker.register('/sw.js', {scope: '/'}).catch(err => {
    console.error(err);
  });
}
