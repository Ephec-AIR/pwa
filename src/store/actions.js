import Vue from 'vue';
import router from 'src/router';
import Constant from 'src/constants';
import idbKeyVal from 'idb-keyval'; // idb keyval
import idb from 'idb'; // idb
import decode from 'jwt-decode';
import Token from 'src/libs/token';
import DateRangeHelper from 'src/libs/date-range-helper';

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
    .then(async response => {
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

      const user = await setAndDecodeToken(response.token, commit);

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

  SYNC ({commit, state}, {serial, secret}) {
    idbKeyVal.get('token').then(token => {
      if (!token) return;
      if (Token.isExpired(token)) {
        return idbKeyVal.delete('token');
      }

      return fetch(`${Constant.API_URL}/sync`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          serial,
          user_secret: secret
        })
      });
    })
    .then(response => {
      if (response.status === 404) {
        commit('TOAST_MESSAGE', {
          messages: ['Le produit n\'existe pas']
        });
        return;
      }

      if (response.status === 403) {
        commit('TOAST_MESSAGE', {
          messages: ['Mauvais secret...']
        });
        return;
      }

      return response.json()
    })
    .then(response => {
      if (response.error) {
        commit('TOAST_MESSAGE', {
          messages: response.error
        });
        return;
      }

      setAndDecodeToken(response.token, commit);

      commit('TOAST_MESSAGE', {
        messages: ['Produit synchronisé avec succès !']
      });
    })
    .catch(err => console.error(err));
  },

  async UPDATE_PROFILE ({commit, state}, {postalCode, supplier}) {
    try {
      const response = await fetch(`${Constant.API_URL}/product`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${await idbKeyVal.get('token')}`
        },
        body: JSON.stringify({
          serial: state.user.serial,
          user_secret: state.user.user_secret,
          postalCode,
          supplier
        })
      });

      if (response.status === 412) {
        commit('TOAST_MESSAGE', {
          messages: ["Sérial non trouvé.", "Vous n'êtes pas synchronisé avec un appareil."],
          duration: 5000
        });
        return;
      }

      const data = await response.json();

      // if field no provided
      if (data.error) {
        commit('TOAST_MESSAGE', {
          messages: data.error
        });
        return;
      }

      await setAndDecodeToken(data.token, commit);

      commit('TOAST_MESSAGE', {
        messages: ['Profil mis à jour avec succès !']
      });
    } catch (err) {
      console.error(err)
    }
  },

  GET_CONSUMPTION ({commit, state}, {type}) {
    const range = getRange(type);
    return fetchData(range, type, commit)
      .catch(err => console.error(err));
  },

  GET_AVERAGE ({commit, state}) {
    const type = state.consumptionLabelType;
    const range = getRange(type);

    fetchAverage(range, type, commit)
      .catch(err => console.error(err));
  }
}

const fetchAverage = async ({start, end}, type, commit) => {
  const response = await fetch(`${Constant.API_URL}/match?start=${start}&end=${end}&type=${type}`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${await idbKeyVal.get('token')}`
    }
  });

  if (response.status === 412) {
    commit('TOAST_MESSAGE', {
      messages: [
        "Vous n'êtes pas synchronisé avec un appareil.",
        "Votre profile n'est pas à jour.",
        "Code postal et/ou fournisseur non indiqué."
      ],
      duration: 8000
    });
    return;
  }

  const data = await response.json();

  // Not really an error, just no better consummer than you in your area.
  if (data.error) {
    commit('TOAST_MESSAGE', {
      messages: [data.error],
      duration: 5000
    });
    return;
  }

  return data;

  // commit('SAVE_AVERAGE', {
  //   average: data
  // });
}

const getRange = (type) => {
  let range;
  switch (type) {
    case 'day': range = DateRangeHelper.dayRange;
      break;
    case 'week': range = DateRangeHelper.weekRange;
      break;
    case 'month': range = DateRangeHelper.monthRange;
      break;
    case 'year': range = DateRangeHelper.yearRange;
      break;
    default: throw new Error('unknown type');
      break;
  }

  return range;
}

const setAndDecodeToken = (token, commit) => {
  return idbKeyVal.set('token', token).then(() => {
    console.log('[IDB] token saved to indexDB.');

    const user = decode(token);
    commit('SAVE_USER', user);
    return user;
  });
}

/**
 * The goal here is to provide an offline strategy that allow the user
 * to see his consumption even when he's offline or has a poor network.
 * In that case, he can see the old consumption that's stored in the cache (idb)
 * @param {Object} range, range of the desired consumption
 * @param {*} commit, vuex
 */
const fetchData = async ({start, end}, type, commit) => {
  // 1. Get data from IDB
  // DO NOT REMOVE ANY COMMENTS IN THIS FUNCTION
  // const db = await idb.open('air', 1, db => {
  //   const consumptionStore = db.createObjectStore('consumption', {
  //     keyPath: 'date'
  //   });
  //   consumptionStore.createIndex('date', 'date');
  // });

  // let transaction = db.transaction('consumption');
  // let store = transaction.objectStore('consumption');
  // const index = store.index('date');

  // const range = IDBKeyRange.bound(DateRangeHelper.adjustISOHours(start), DateRangeHelper.adjustISOHours(end));
  // const idbData = await getIDBByRange(index, range);

  // const lastDate = idbData.length > 0 ? idbData[idbData.length - 1].date : start;
  // const firstDate = idbData.length > 0 ? idbData[0].date : end;
  // if (DateRangeHelper.removeMinutesAndSeconds(firstDate) <= DateRangeHelper.removeMinutesAndSeconds(start)
  //   && DateRangeHelper.removeMinutesAndSeconds(lastDate) >= DateRangeHelper.removeMinutesAndSeconds(end)) {
  //   console.log('not fetching...')
  //   // store data
  //   storeConsumption(commit, idbData);
  //   return;
  // }

  // NOTE: Fetching everything or only the missing ranges [start - firstDate], [lastDate - end] ?
  // NOTE: 2 requests or only 1 with multiple range (if needed) ?

  // 2. Get missing data from API
  //start = lastDate ? lastDate : start; // move start date
  const response = await fetch(`${Constant.API_URL}/consumption?start=${start.toISOString()}&end=${end.toISOString()}&type=${type}`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${await idbKeyVal.get('token')}`
    }
  });

  if (response.status === 412) {
    commit('TOAST_MESSAGE', {
      messages: ["Sérial non trouvé.", "Vous n'êtes pas synchronisé avec un appareil."],
      duration: 5000
    });
    return;
  }

  const fetchData = await response.json();

  // 3. Put data in IDB
  // transaction = db.transaction('consumption', 'readwrite');
  // store = transaction.objectStore('consumption');
  // fetchData.forEach(data => store.put(data));
  // transaction.complete;

  // 4. store data
  return fetchData;
  //storeConsumption(commit, fetchData);
}

const getIDBByRange = (index, range) => {
  return new Promise((resolve, reject) => {
    const idbData = [];
    index.iterateCursor(range, cursor => {
      if (!cursor) {
        resolve(idbData);
        return;
      }
      idbData.push(cursor.value);
      cursor.continue();
    });
  });
}

// const storeConsumption = (commit, fetchData = []) => {
//   commit('SAVE_CONSUMPTION', {
//     consumption: fetchData
//   });
// }


