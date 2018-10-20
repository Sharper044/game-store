import { ActionTypes } from './types';

const initialState = {
  products: [],
  user: null,
  orders: [],
  cart: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_USER_DATA:
      return { ...state, user: action.payload };
    case ActionTypes.PLACE_ORDER:
    case ActionTypes.GET_ORDERS:
    case ActionTypes.DELETE_ORDER:
      return { ...state, orders: action.payload };
    case ActionTypes.NEW_CART:
    case ActionTypes.GET_CART:
    case ActionTypes.UPDATE_CART:
    case ActionTypes.DELETE_CART:
      return { ...state, cart: action.payload };
    case ActionTypes.GET_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export default reducer;
