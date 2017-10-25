import Vue from 'vue';
import router from 'src/router';
import Constant from 'src/constants';
import idbKeyVal from 'idb-keyval'; // indexedDB
import decode from 'jwt-decode';
import Token from 'src/libs/token';
import DateHelper from 'src/libs/date-helper';

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
      // if field no provided
      if (response.error) {
        commit('TOAST_MESSAGE', {
          messages: response.error
        });
        return;
      }

      // user not found
      if (response.message) {
        commit('TOAST_MESSAGE', {
          messages: [response.message]
        });
        return;
      }

      idbKeyVal.set('token', response.token).then(() => {
        console.log('[IDB] token saved to indexDB.');
      });

      const user = decode(response.token);
      commit('SAVE_USER', user);

      // if user is not linked with serial
      if (!user.serial) {
        commit('TOAST_MESSAGE', {
          messages: ["Vous n'êtes pas encore synchronisés avec un appareil.",
            "Veuillez indiquer le serial ainsi que le user_secret dans les champs adéquats."],
            duration: 8000
        });
        router.push('/parameters');
        return;
      }
      // if user has no postal code ?

      // everything's good, go to home page
      router.push('/home');
      return
    })
    .catch(err => console.error(err));
  },

  LOGOUT ({commit, state}) {
    idbKeyVal.delete('token').then(() => {
      console.log('[IDB] token deleted from indexDB');
      commit('REMOVE_USER');
      router.push('/');
    }).catch(err => console.error(err));
  },

  SET_USER_IF_EXIST ({commit, state}) {
    idbKeyVal.get('token').then(token => {
      if (!token) return;
      if (Token.isExpired(token)) {
        return idbKeyVal.delete('token');
      }

      const user = decode(token);
      commit('SAVE_USER', user);
    }).catch(err => console.error(err));
  },

  GET_CONSUMPTION ({commit, state}, type) {

  }
}
