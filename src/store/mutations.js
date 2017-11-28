import Vue from 'vue';

export default {
  SAVE_USER (state, user) {
    state.user = {
      userId: user.userId,
      username: user.username,
      serial: user.serial,
      secret: user.user_secret,
      postalCode: user.postalCode,
      supplier: user.supplier
    };
  },
  REMOVE_USER (state) {
    state.user = {
      userId: '',
      username: '',
      serial: ''
    }
  },
  CONSUMPTION_LABEL_TYPE (state, type) {
    state.consumptionLabelType = type;
  },
  SAVE_CONSUMPTION (state, {consumption}) {
    state.consumption = consumption
  },
  SAVE_AVERAGE (state, {average}) {
    state.average = average;
  },
  // SET_GRAPH_TO_SHOW (state, {graph, toShow}) {
  //   state['graph'][graph] = toShow;
  // },
  TOAST_MESSAGE (state, options) {
    const duration = options.duration || 3000;
    state.toast = {
      messages: options.messages,
      show: true
    };
    setTimeout(() => state.toast.show = false, duration);
  }
}
