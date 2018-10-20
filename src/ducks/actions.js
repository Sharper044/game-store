import * as axios from 'axios';
import { ActionTypes } from './types';


export const getUserData = () => {
  const userInfo = axios.default.get('/api/userData').then(res => res.data);
  return { type: ActionTypes.GET_USER_DATA, payload: userInfo };
};

export const getProducts = () => {
  const products = axios.default.get('/api/getProducts').then(res => res.data);
  return { type: ActionTypes.GET_PRODUCTS, payload: products };
};

export const getOrders = (customer_id) => {
  const orders = axios.default.put('/api/getOrders', { customer_id }).then(res => res.data);
  return { type: ActionTypes.GET_ORDERS, payload: orders };
};

export const placeOrder = (cart_id, order_time, customer_id) => {
  const orders = axios.default.post('/api/placeOrder', { cart_id, order_time, customer_id }).then(res => res.data);
  return { type: ActionTypes.PLACE_ORDER, payload: orders };
};

export const deleteOrder = (order_id, customer_id) => {
  const orders = axios.default.post('/api/deleteOrder', { order_id, customer_id }).then(res => res.data);
  return { type: ActionTypes.DELETE_ORDER, payload: orders };
};

export const getCart = (customer_id) => {
  const cart = axios.default.put('/api/getCart', { customer_id }).then(res => res.data);
  return { type: ActionTypes.GET_CART, payload: cart };
};

export const updateCart = (cart_id, customer_id, items) => {
  const cart = axios.default.put('/api/updateCart', { cart_id, customer_id, items }).then(res => res.data);
  return { type: ActionTypes.UPDATE_CART, payload: cart };
};

export const newCart = (customer_id) => {
  const cart = axios.default.post('/api/newCart', { customer_id }).then(res => res.data);
  return { type: ActionTypes.NEW_CART, payload: cart };
};

export const deleteCart = (cart_id, customer_id) => {
  const cart = axios.default.put('/api/deleteCart', { cart_id, customer_id }).then(res => res.data);
  return { type: ActionTypes.DELETE_CART, payload: cart };
};
