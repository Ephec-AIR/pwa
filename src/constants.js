const production = process.env.NODE_ENV === 'production';

export default class Constant {
  static get API_URL () {
    return (production ? 'https://air.ephec-ti.org/api/v1' : 'http://localhost:3000');
  }
}
