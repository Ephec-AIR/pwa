export default {
  SAVE_JWT (state, {token, userId, username}) {
    state.token = token;
    state.username = username;
    state.userId = userId;
  }
}
