import axios from 'axios';
import { getAccessToken } from './Auth';

const API_URL = process.env.REACT_APP_API_URL;

class Api {

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_URL
    });

    if ( !this.API ) {
      this.API = this;
    } 

    return this.API;
  }

  get(endpoint) {
    this.insertAccessToken();

    /***********************************************************
    *                           MOCK                           *
    *   Backend auth response authorized|unauthorized|expired  *
    ***********************************************************/
    this.axiosInstance.interceptors.response.use( (response) => {
      response.authStatus = 'authorized';
      return response;
    });

    return this.axiosInstance.get(endpoint);
  }

  post(endpoint, body) {
    this.insertAccessToken();

    /***********************************************************
    *                           MOCK                           *
    *                   Backend login response                 *
    ***********************************************************/
    if ( endpoint === 'login' ) {
      this.axiosInstance.interceptors.response.use( (response) => {
        response.authToken = 'ihc908yc987y239hfy7t0173ryvc9rygt08gh028ry2';
        //response.status = 401;
        return response;
      });  
    }

    return this.axiosInstance.post(endpoint, body);
  }

  // Insert the authorization permit into all requests
  insertAccessToken(){
    this.axiosInstance.interceptors.request.use( (request) => {
      request.headers.Authorization = 'Bearer ' + getAccessToken();
      return request;
    });
  }
}

const API = new Api();
Object.freeze(API);

export default API;