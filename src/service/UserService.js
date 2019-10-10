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
            reject( new Error('Your session has expired') );
            break;
          default:
            reject( new Error('Something went wrong...') );
            break;
        }
      })
      .catch( error => {
        console.log('estou aqui');        
        reject( error );
      });
    });
  }

  static postUser( user ) {
    return new Promise( (resolve, reject) => {
      API.post(API_ENDPOINT,
        {
          firstName: user.firstName,
          lastName: user.lastName,
          userName: user.userName,
          email: user.email
        }
      ).then(response => {
        if(response.status === 201) {
          resolve( response );
        } else {
          reject( new Error('Something went wrong...') );
        }
      })
      .catch( error => {
        reject( error );
      });
    });
  }

  static putUser( user ) {
    return new Promise( (resolve, reject) => {
      API.put(`${API_ENDPOINT}/${user.id}`,
        {
          firstName: user.firstName,
          lastName: user.lastName,
          userName: user.userName,
          email: user.email
        }
      ).then(response => {
        if(response.status === 200) {
          resolve( response );
        } else {
          reject ( new Error('Something went wrong...') );
        }
      })
      .catch( error => {
        console.log(error);
        
        reject ( error )
      });
    });
  }

  static deleteUser(id){
    return new Promise( (resolve, reject) => {
      API.delete(`${API_ENDPOINT}/${id}`)
      .then(response => {
        if ( response.status === 200 ) {
          resolve( response );
        } else {
          reject( new Error('Something went wrong...') );
        }
      })
      .catch( error => {
        reject( error );
      });
    });
  }

}