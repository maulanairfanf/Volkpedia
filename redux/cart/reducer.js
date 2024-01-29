import {
  START_FETCHING_CART,
  SUCCESS_FETCHING_CART,
  ERROR_FETCHING_CART,
} from './constants';

const statuslist = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error',
};

const initialState = {
  data: [],
  bill: 0,
  status: statuslist.idle,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_CART:
      return { ...state, status: statuslist.process };

    case ERROR_FETCHING_CART:
      return { ...state, status: statuslist.error };

    case SUCCESS_FETCHING_CART:
      return {
        ...state,
        status: statuslist.success,
        data: action.cart,
        bill: action.bill
      }
    default:
      return state;
  }
}
