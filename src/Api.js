import axios from 'axios';
import { getAccessToken } from './Auth';


const API_URL = process.env.REACT_APP_API_URL;
const API = axios.create({ baseURL: API_URL });

// Insert auth token in all requests
API.interceptors.request.use( (request) => {
  request.headers.Authorization = 'Bearer ' + getAccessToken();
  return request;
});

// Mock backend response
API.interceptors.response.use( (response) => {
  response.authToken = 'ihc908yc987y239hfy7t0173ryvc9rygt08gh028ry2';
  //response.status = 401;
  return response;
});

export default API;