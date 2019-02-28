import { ADD_PRODUCT_TO_CART } from '../actions';

export function CartReducer(state = false, action) {
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            return action.data;

        default:
            return state;
    }
}