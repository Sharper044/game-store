// Used to provide consistent action types. When the conversion to TypeScript takes place these interfaces will be used again.

// interface IProduct {
//   id: number;
//   name: string;
//   description: string;
//   photo_url: string;
//   price: number;
//   rating: number;
// }

// interface IItems {
//   id: number;
//   product_id: number;
//   quantity: number;
//   price: number;
// }

// interface IOrder {
//   id: number;
//   cart_id: number;
//   order_time: string;
//   customer_id: number; // not the user_id
//   total: number;
//   active: string;
//   items: IItems[];
// }

// export interface IState {
//   readonly products: IProduct[];
//   readonly user: any;
//   readonly orders: IOrder[];
//   readonly cart: {
//     id: number;
//     customer_id: number; // not the user_id
//     total: number;
//     active: string;
//     items: IItems[];
//   };
// }

// TODO: Add the remaining action types (see actions.js).
export const ActionTypes = {
  GET_USER_DATA: 'GET_USER_DATA',
  GET_PRODUCTS: 'GET_PRODUCTS',
  GET_ORDERS: 'GET_ORDERS',
  PLACE_ORDER: 'PLACE_ORDER',
  DELETE_ORDER: 'DELETE_ORDER',
  GET_CART: 'GET_CART',
  UPDATE_CART: 'UPDATE_CART',
  NEW_CART: 'NEW_CART',
  DELETE_CART: 'DELETE_CART',
};
