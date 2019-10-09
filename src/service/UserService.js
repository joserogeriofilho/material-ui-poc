import API from '../Api'
import { logout } from '../Auth'

const API_ENDPOINT = 'users';
const SORT_QUERY = '?_sort=lastName&_order=asc';


export default class UserService {

  static getUsers() {
    return new Promise( (resolve, reject) => {
      API.get(API_ENDPOINT + SORT_QUERY)
      .then(response => {
        switch ( response.status ) {
          case 200:
            resolve(response.data);
            break;
          case 401:
            logout();
            reject(new Error('Your session has expired'));
            break;
          default:
            reject(new Error('Something went wrong...'));
            break;
        }
      })
      .catch(error => {
        reject(error);
      });
    });
  }

}