export default {
  SAVE_USER (state, user) {
    state.user = user;
  },
  TOAST_MESSAGE (state, options) {
    state.toast = options;
  }
}
