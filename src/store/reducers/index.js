import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading, productDetails, cartDetails } from './items';
export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    productDetails,
    cartDetails
});