import { FETCH_ORDER_TOTAL } from '../actions';

export function FetchOrderTotalReducer(state = [], action) {
    switch (action.type) {
        case FETCH_ORDER_TOTAL:
            return action.data ? state + action.data : 0;

        default:
            return state;

    }
}