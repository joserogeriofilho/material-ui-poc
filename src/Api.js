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
    // Insert the authorization permit into all requests
    this.axiosInstance.interceptors.request.use( (request) => {
      request.headers.Authorization = 'Bearer ' + getAccessToken();
      console.log(request);
      return request;
    });

    // Mock the backend response OK|EXPIRED|ERROR
    this.axiosInstance.interceptors.response.use( (response) => {
      response.statusText = 'OK';
      return response;
    });

    return this.axiosInstance.get(endpoint);
  }
}

const API = new Api();
Object.freeze(API);

export default API;