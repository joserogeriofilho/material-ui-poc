import axios from 'axios';
import { getAccessToken } from './Auth';


const API_URL = process.env.REACT_APP_API_URL;
const Http = axios.create({ baseURL: API_URL });

// Insert auth token in all requests
Http.interceptors.request.use( (request) => {
  request.headers.Authorization = 'Bearer ' + getAccessToken();
  return request;
});

// Mock backend response
Http.interceptors.response.use( (response) => {
  response.authToken = 'ihc908yc987y239hfy7t0173ryvc9rygt08gh028ry2';
  //response.status = 201;
  return response;
});

export default Http;