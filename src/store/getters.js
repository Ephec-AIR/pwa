export default {
  isLoggedIn(state) {
    return state.user.userId ? true : false;
  }
}
