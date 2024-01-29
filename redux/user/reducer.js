import { ADD_USER } from './constants';

let initialState = {
  data: {}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        data: action.user,
      };

    default:
      return state;
  }
}
