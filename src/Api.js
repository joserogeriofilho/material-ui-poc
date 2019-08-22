import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const DEFAULT_QUERY = 'users';
const SORT_QUERY = '?_sort=lastName&_order=asc';

class Api {
  constructor() {
    if ( !Api.instance ) {
      Api.instance = this;
    }

    return Api.instance;
  }

  get() {
    return axios.get(API_URL + DEFAULT_QUERY + SORT_QUERY);
  }
}

const instance = new Api();
Object.freeze(instance);

export default instance;