import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { fetchProducts } from './actions';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));
//store.dispatch(fetchProducts());

export default store