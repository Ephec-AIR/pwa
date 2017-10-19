import Constant from 'src/constants';
import idbKeyVal from 'idb-keyval'; // indexDB

export default {
  LOGIN ({commit, state}, token) {
    fetch(`${Constant.API_URL}`)
    .then(response => response.json())
    .then(response => {
      console.log(response.token);
      idbKeyVal.set('token', response.token);
      decodeToken(response.token).then(user => {
        commit('SAVE_JWT', user);
      })
    }).catch(err => console.error(err.message));
  }
}

function decodeToken(token) {

}
