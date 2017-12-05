export default {
  isLoggedIn(state) {
    return state.user.userId ? true : false;
  },
  gain (state) {
    return state.graph.now.price - state.graph.before.price;
  },
  checkedCheckbox (state) {
    return {
      'now': state.graph.now.show,
      'before': state.graph.before.show,
      'average': state.graph.average.show
    };
  }
}
