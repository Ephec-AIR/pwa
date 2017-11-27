import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // toast messages
    toast: {
      messages: [],
      show: false
    },
    user: {
      userId: '',
      username: '',
      serial: ''
    },
    graph: {
      consumptionNow: true,
      consumptionBefore: false,
      consumptionAverage: false
    },
    consumptionLabelType: 'month',
    consumption: {
      before: {
        values: {},
        price: 0
      },
      now: {
        values: {},
        price: 0
      }
    },
    average: {
      serial: '',
      value: 0,
      username: '',
      values: {}
    }
  },
  actions,
  mutations,
  getters
});
