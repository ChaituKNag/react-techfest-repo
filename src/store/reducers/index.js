import { FetchProductsReducer } from './FetchProductsReducer';
import { FetchProductReducer } from './FetchProductReducer';
import { FetchOrderTotalReducer } from './FetchOrderTotalReducer';
import { CartReducer } from './CartReducer';
import { CartDetailsReducer } from './CartDetailsReducer';
import { CategoriesReducer } from './CategoriesReducer';
import { ListGridReducer } from './ListGridReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    FetchProductsReducer,
    FetchProductReducer,
    FetchOrderTotalReducer,
    CartReducer,
    CartDetailsReducer,
    CategoriesReducer,
    ListGridReducer
});

export default rootReducer;