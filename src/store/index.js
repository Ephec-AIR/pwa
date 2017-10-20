import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // toast message
    toast: {
      message: '',
      duration: ''
    },
    user: {
      userId: '',
      username: '',
      serial: ''
    },
    consumption: []
  },
  actions,
  mutations,
  getters
});
