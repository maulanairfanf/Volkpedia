import { useFetch } from '../../hooks/fetch';
import {
  START_FETCHING_CART,
  SUCCESS_FETCHING_CART,
  ERROR_FETCHING_CART,
} from './constants';

export const startFetchingCart = () => {
  return {
    type: START_FETCHING_CART,
  };
};

export const successFetchingCart = ({ cart, bill }) => {
  return {
    type: SUCCESS_FETCHING_CART,
    cart,
    bill
  };
};

export const errorFetchingCart = () => {
  return {
    type: ERROR_FETCHING_CART,
  };
};

export const fetchCart = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchingCart());

    try {
      const response = await useFetch("get", "/cart")
      dispatch(
        successFetchingCart({
          cart: response.data.data.products,
          bill: response.data.data.bill
        })
      );
    } catch (error) {
      dispatch(errorFetchingCart());
    }
  };
};