import { ADD_USER } from './constants';
import { useFetch } from '../../hooks/fetch';

export function addUser(user) {
  return {
    type: ADD_USER,
    user,
  };
}

export const fetchGetProfile = () => {
  return async (dispatch, getState) => {

    try {
      const response = await useFetch('get', '/me')
      dispatch(
        addUser(response.data.data)
      );
    } catch (error) {
    }
  };
};