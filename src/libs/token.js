import idbKeyVal from 'idb-keyval';
import decode from 'jwt-decode';

class Token {
   static isLoggedIn() {
    return idbKeyVal.get('token').then(token => {
      return !!token && !Token.isExpired(token);
    });
  }

  static getExpirationDate(encodedToken) {
    const token = decode(encodedToken);
    if (!token.exp) {
      return null;
    }

    const date = new Date();
    date.setUTCSeconds(token.exp);
    return date;
  }

  static isExpired(token) {
    const expirationDate = Token.getExpirationDate(token);
    return expirationDate < new Date();
  }
}

export default Token;
