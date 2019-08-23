import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const SORT_QUERY = '?_sort=lastName&_order=asc';

class Api {
  constructor() {
    if ( !Api.API ) {
      Api.API = this;
    }

    return Api.API;
  }

  getUsers() {
    return axios.get(API_URL + 'users' + SORT_QUERY);
  }
}

const API = new Api();
Object.freeze(API);

export default API;