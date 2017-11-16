import Vue from 'vue';

export default {
  SAVE_USER (state, user) {
    state.user = {
      userId: user.userId,
      username: user.username,
      serial: user.serial
    };
  },
  REMOVE_USER (state) {
    state.user = {
      userId: '',
      username: '',
      serial: ''
    }
  },
  SAVE_CONSUMPTION (state, {consumption}) {
    // merge arrays
    state.consumption = {/*...state.consumption,*/ ...consumption};
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
