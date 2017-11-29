import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
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
    consumptionLabelType: 'month',
    graph: {
      now: {
        show: false,
        values: {},
        price: 0
      },
      before: {
        show: false,
        values: {},
        price: 0
      },
      average: {
        show: false,
        serial: '',
        value: 0,
        username: '',
        values: {}
      }
    },
    chartist: {
      labels: [],
      series: [
        [], [], []
      ]
    }
  },
  actions,
  mutations,
  getters
});

if (module.hot) {
  // accept actions and mutations as hot modules
  module.hot.accept(['./mutations', './actions'], () => {
    // require the updated modules
    // have to add .default here due to babel 6 module output
    const newMutations = require('./mutations').default
    const newActions = require('./actions').default
    // swap in the new actions and mutations
    store.hotUpdate({
      mutations: newMutations,
      actions: newActions
    })
  })
}

export default store;
