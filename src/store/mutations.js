export default {
  SAVE_USER (state, user) {
    state.user = user;
  },
  REMOVE_USER (state) {
    state.user = {
      userId: '',
      username: '',
      serial: ''
    }
  },
  TOAST_MESSAGE (state, options) {
    const duration = options.duration || 3000;
    state.toast.message = options.message;
    setTimeout(() => state.toast.message = '', duration);
  }
}
