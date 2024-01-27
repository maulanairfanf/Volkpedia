import { USER_LOGIN, USER_LOGOUT } from './constants';
import * as SecureStore from 'expo-secure-store';

export function userLogin(token) {
  return {
    type: USER_LOGIN,
    token,
  };
}

export function userLogout() {
  return {
    type: USER_LOGOUT,
  };
}
