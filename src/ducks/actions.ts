import * as axios from 'axios';
import { action } from 'typesafe-actions';
import { ActionTypes, IState } from './types';


export const getUserData = () => {
  const userInfo = axios.default.get('/api/userData').then(res => res.data);
  action(ActionTypes.GET_USER_DATA, userInfo);
};

export const getProducts = () => {
  const products = axios.default.get('/api/getProducts').then(res => res.data);
  action(ActionTypes.GET_PRODUCTS, products);
};

export const getOrders = (customer_id: number) => {
  const orders = axios.default.put('/api/getOrders', { customer_id }).then(res => res.data);
  action(ActionTypes.GET_ORDERS, orders);
};

export const placeOrder = (cart_id: number, order_time: string, customer_id: number) => {
  const orders = axios.default.post('/api/placeOrder', { cart_id, order_time, customer_id }).then(res => res.data);
  action(ActionTypes.PLACE_ORDER, orders);
};

export const deleteOrder = (order_id: number, customer_id: number) => {
  const orders = axios.default.post('/api/deleteOrder', { order_id, customer_id }).then(res => res.data);
  action(ActionTypes.DELETE_ORDER, orders);
};

export const getCart = (customer_id: number) => {
  const cart = axios.default.put('/api/getCart', { customer_id }).then(res => res.data);
  action(ActionTypes.GET_CART, cart);
};

export const updateCart = (cart_id: number, customer_id: number, items: IState['cart']['items']) => {
  const cart = axios.default.put('/api/updateCart', { cart_id, customer_id, items }).then(res => res.data);
  action(ActionTypes.UPDATE_CART, cart);
};

export const newCart = (customer_id: number) => {
  const cart = axios.default.post('/api/newCart', { customer_id }).then(res => res.data);
  action(ActionTypes.NEW_CART, cart);
};

export const deleteCart = (cart_id: number, customer_id: number) => {
  const cart = axios.default.put('/api/deleteCart', { cart_id, customer_id }).then(res => res.data);
  action(ActionTypes.DELETE_CART, cart);
};
