import { applyMiddleware, createStore, } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import reducer from './ducks/reducer';

export default createStore(reducer, composeWithDevTools(applyMiddleware(reduxPromiseMiddleware())));
