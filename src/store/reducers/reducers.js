import { combineReducers } from 'redux';
import CartReducer from './cartReducer';
import ProductReducer from './productReducer';
import LoaderReducer from './loaderReducer';

export default combineReducers({
  cart:CartReducer,
  product:ProductReducer,
  loader:LoaderReducer
})