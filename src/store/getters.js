export default {
  isLoggedIn(state) {
    return state.user.userId ? true : false;
  },
  gain (state) {
    return state.consumption.now.price - state.consumption.before.price;
  }
}
