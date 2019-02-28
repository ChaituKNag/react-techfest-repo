import { ADD_TO_CART, DELETE_ITEM_FROM_CART } from '../actions';

export function CartDetailsReducer(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.data];

        case DELETE_ITEM_FROM_CART:
            return Object.assign([], state.filter(item => item.id !== action.data));

        default:
            return state;
    }
}