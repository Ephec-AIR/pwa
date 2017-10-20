import Vue from 'vue';
import router from 'src/router';
import Constant from 'src/constants';
import idbKeyVal from 'idb-keyval'; // indexDB
import decode from 'jwt-decode';

export default {
  LOGIN ({commit, state}, {username, password}) {
    fetch(`${Constant.API_URL}/login`, {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then(response => response.json())
    .then(response => {
      // check errors
      if (response.error) {

      }

      idbKeyVal.set('token', response.token).then(_ => {
        console.log('token succefully saved to idb.');
      });

      const user = decode(response.token);
      commit('SAVE_USER', user);

      // if user is not linked with serial
      if (!user.serial) {
        router.go('/parameters');
        commit('TOAST_MESSAGE', {
          message: `Vous n'êtes pas encore synchronisés avec un appareil.
            Veuillez indiquer le serial ainsi que le user_secret dans les champs adéquats.`,
          duration: 3000
        });
        return;
      }
      // if user has no postal code ?

      // everything's good, go to home page
      router.go('/home');
      return
    })
    .catch(err => console.error(err));
  }
}
