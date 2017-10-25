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

  GET_CONSUMPTION_DAY ({commit, state}) {
    fetchData(DateRangeHelper.dayRange, commit)
      .catch(err => console.error(err));
  },

  GET_CONSUMPTION_WEEK ({commit, state}) {
    fetchData(DateRangeHelper.weekRange, commit)
      .catch(err => console.error(err));
  },

  GET_CONSUMPTION_MONTH ({commit, state}) {
    fetchData(DateRangeHelper.monthRange, commit)
      .catch(err => console.error(err));
  },

  GET_CONSUMPTION_YEAR ({commit, state}) {
    fetchData(DateRangeHelper.yearRange, commit)
      .catch(err => console.error(err));
  }
}

/**
 * The goal here is to provide an offline strategy that allow the user
 * to see his consumption even when he's offline or has a poor network.
 * In that case, he can see the old consumption that's stored in the cache (idb)
 * @param {Object} {start, end}, range of the desired consumption
 * @param {*} commit, vuex
 */
const fetchData = async ({start, end}, commit) => {
  // 1. Get data from IDB
  const db = await idb.open('air', 1, db => {
    const consumptionStore = db.createObjectStore('consumption', {
      keyPath: 'date'
    });
    consumptionStore.createIndex('date', 'date');
  });

  const transaction = db.transaction('consumption');
  const store = transaction.objectStore('consumption');
  const index = store.index('date');

  const range = IDBKeyRange.bound(start, end);
  const idbData = await store.openCursor(range).then(cursor => {
    const data = [];
    if (!cursor) {
      return data;
    }
    console.log(cursor.value);
    data.push(cursor.value);
    return cursor.continue();
  });
  console.log(idbData)
  const lastDate = idbData.length > 0 ? idbData[idbData.length - 1].date : start;

  if (lastDate >= end) {
    // store data
    storeConsumption(idbData);
    return;
  }

  // 2. Get missing data from API
  //start = lastDate ? lastDate : start; // move start date
  const response = await fetch(`${Constant.API_URL}/consumption?start=${start}&end=${end}`, {
    headers: {
      authorization: `Bearer ${await idbKeyVal.get('token')}`
    }
  });

  if (response.status === 412) {
    commit('TOAST_MESSAGE', {
      messages: ["Sérial non trouvé.", "Vous n'êtes pas synchronisé avec un appareil."],
      duration: 5000
    });
  }

  const fetchData = await response.json();

  // 3. Put data in IDB
  fetchData.forEach(data => store.put(data, data.date));
  transaction.complete;

  // 4. store data
  storeConsumption(idbData, fetchData, commit);
}

const storeConsumption = (idbData = [], fetchData = [], commit) => {
  commit('SAVE_CONSUMPTION', {
    consumption: [...idbData, ...fetchData]
  });
}
