export default {
  isLoggedIn(state) {
    return state.user.userId ? true : false;
  },
  gain (state) {
    return state.graph.now.price - state.graph.before.price;
  }
}
