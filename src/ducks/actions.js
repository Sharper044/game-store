import * as axios from 'axios';
import { ActionTypes } from './types';

export const getUserData = () => {
  const userInfo = axios.get(process.env.REACT_APP_SERVER_URL + '/api/userData').then(res => res.data);
  return { type: ActionTypes.GET_USER_DATA, payload: userInfo };
};

export const getProducts = () => {
  const products = axios.get('http://localhost:3030/api/getProducts').then(res => res.data).catch(console.log);
  return { type: ActionTypes.GET_PRODUCTS, payload: products };
};

export const getOrders = (customer_id) => {
  const orders = axios.put(process.env.REACT_APP_SERVER_URL + '/api/getOrders', { customer_id }).then(res => res.data);
  return { type: ActionTypes.GET_ORDERS, payload: orders };
};

export const placeOrder = (cart_id, order_time, customer_id) => {
  const orders = axios.post(process.env.REACT_APP_SERVER_URL + '/api/placeOrder', { cart_id, order_time, customer_id }).then(res => res.data);
  return { type: ActionTypes.PLACE_ORDER, payload: orders };
};

export const deleteOrder = (order_id, customer_id) => {
  const orders = axios.post(process.env.REACT_APP_SERVER_URL + '/api/deleteOrder', { order_id, customer_id }).then(res => res.data);
  return { type: ActionTypes.DELETE_ORDER, payload: orders };
};

export const getCart = (customer_id) => {
  const cart = axios.put(process.env.REACT_APP_SERVER_URL + '/api/getCart', { customer_id }).then(res => res.data);
  return { type: ActionTypes.GET_CART, payload: cart };
};

export const updateCart = (cart_id, customer_id, items) => {
  const cart = axios.put(process.env.REACT_APP_SERVER_URL + '/api/updateCart', { cart_id, customer_id, items }).then(res => res.data);
  return { type: ActionTypes.UPDATE_CART, payload: cart };
};

export const newCart = (customer_id) => {
  const cart = axios.post(process.env.REACT_APP_SERVER_URL + '/api/newCart', { customer_id }).then(res => res.data);
  return { type: ActionTypes.NEW_CART, payload: cart };
};

export const deleteCart = (cart_id, customer_id) => {
  const cart = axios.put(process.env.REACT_APP_SERVER_URL + '/api/deleteCart', { cart_id, customer_id }).then(res => res.data);
  return { type: ActionTypes.DELETE_CART, payload: cart };
};
