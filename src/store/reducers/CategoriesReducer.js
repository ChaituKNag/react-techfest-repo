import { FETCH_CATEGORIES } from '../actions';

export function CategoriesReducer(state = [], action) {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return action.data;

        default:
            return state;
    }
}