import axios from 'axios';
import { getAccessToken } from './Auth';

const API_URL = process.env.REACT_APP_API_URL;

class Api {

  constructor() {
    if ( !this.API ) {
      this.axiosInstance = axios.create({
        baseURL: API_URL
      });

      /***********************************************************
      *                  MOCK BACKEND RESPONSE                   *
      ***********************************************************/
      this.axiosInstance.interceptors.response.use( (response) => {
        response.authStatus = 'authorized';
        response.authToken = 'ihc908yc987y239hfy7t0173ryvc9rygt08gh028ry2';
        //response.status = 401;
        return response;
      });

      this.API = this;
    } 

    return this.API;
  }

  get(endpoint) {
    this.insertAccessToken();
    return this.axiosInstance.get(endpoint);
  }

  post(endpoint, body) {
    this.insertAccessToken();
    return this.axiosInstance.post(endpoint, body);
  }

  put(endpoint, body) {
    this.insertAccessToken();
    return this.axiosInstance.put(endpoint, body);
  }

  delete(endpoint) {
    this.insertAccessToken();
    return this.axiosInstance.delete(endpoint);
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