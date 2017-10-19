import router from 'src/router';
import Constant from 'src/constants';
import idbKeyVal from 'idb-keyval'; // indexDB
import decode from 'jwt-decode';

export default {
  LOGIN ({commit, state}, token) {
    fetch(`${Constant.API_URL}/login`, {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username: state.username,
        password: state.password
      })
    })
    .then(response => response.json())
    .then(response => {
      const user = decode(response.token);
      commit('SAVE_JWT', user);

      // if user is not linked with serial
      if (!user.serial) {
        router.go('/parameters');
        // TOAST ??
        return;
      }
      // if user has no postal code ?

      // everything's good, go to home page
      router.go('/home');
      return idbKeyVal.set('token', response.token);
    })
    .then(_ => {
      console.log('token succefully saved to idb.');
    })
    .catch(err => console.error(err.message));
  }
}
