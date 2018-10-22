import { ActionTypes } from './types';

// Initial setup on the redux state
const initialState = {
  products: [],
  user: null,
  orders: [],
  cart: null,
};

// The reducer function for redux. (see documentation) TODO: add in the cases for the other actions that have yet to be written (see actions.js).
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_USER_DATA + '_FULFILLED':
      return { ...state, user: action.payload };
    case ActionTypes.PLACE_ORDER + '_FULFILLED':
    case ActionTypes.GET_ORDERS + '_FULFILLED':
    case ActionTypes.DELETE_ORDER + '_FULFILLED':
      return { ...state, orders: action.payload };
    case ActionTypes.NEW_CART + '_FULFILLED':
    case ActionTypes.GET_CART + '_FULFILLED':
    case ActionTypes.UPDATE_CART + '_FULFILLED':
    case ActionTypes.DELETE_CART + '_FULFILLED':
      return { ...state, cart: action.payload };
    case ActionTypes.GET_PRODUCTS + '_FULFILLED':
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default reducer;
