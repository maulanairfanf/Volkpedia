import { USER_LOGIN, USER_LOGOUT } from './constants';


let initialState = {
  token: null,
  authenticated: null,
  isLoading: true,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        token: action.token,
        authenticated: true,
        isLoading: false
      };
    case USER_LOGOUT:
      return { token: null, authenticated: null, isLoading: false };

    default:
      return state;
  }
}
