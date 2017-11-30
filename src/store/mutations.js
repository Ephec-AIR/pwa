import Vue from 'vue';
import {fillArray, getLabels} from '../libs/utils';

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
  SAVE_CONSUMPTION (state, {consumption: {before, now}}) {
    state.graph.before = {...state.graph.before, ...before};
    state.graph.now = {...state.graph.now, ...now};

    const type = state.consumptionLabelType;
    const labels = getLabels(type);
    state.chartist.labels = labels;
  },
  SAVE_AVERAGE (state, {average}) {
    console.log(average);
    state.graph.average = {...state.graph.average, ...average};
    console.log(state.graph.average);
  },
  SET_GRAPH_TO_SHOW (state, {graph, position, toShow}) {
    //console.log(graph, position, toShow)
    //Vue.set()
    Vue.set(state.chartist.series, position, toShow ? fillArray(state.graph[graph].values, state.chartist.labels.length) : []);
    state.graph[graph].show = toShow;
  },
  TOAST_MESSAGE (state, options) {
    const duration = options.duration || 3000;
    state.toast = {
      messages: options.messages,
      show: true
    };
    setTimeout(() => state.toast.show = false, duration);
  }
}
