import { combineReducers } from 'redux';
import CartReducer from './cartReducer';
import ProductReducer from './productReducer';

export default combineReducers({
  // cart:CartReducer,
  product:ProductReducer
})