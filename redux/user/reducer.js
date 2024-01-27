import { ADD_USER } from './constants';

let initialState = {
  user: {}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        user: action.user,
      };

    default:
      return state;
  }
}
