import { FETCH_PRODUCT_BY_ID } from '../actions';

export function FetchProductReducer(state = [], action) {

    switch (action.type) {
        case FETCH_PRODUCT_BY_ID:
            return action.data;

        default:
            return state;
    }
}