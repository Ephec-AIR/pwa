export default {
  SAVE_JWT (state, {userId, username, token}) {
    state.user = {
      userId,
      username,
      token
    };
  }
}
