import { LIST_GRID_VIEW } from '../actions';

export function ListGridReducer(state = "card", action) {
    switch (action.type) {
        case LIST_GRID_VIEW:
            return action.data;
        default:
            return state;
    }
}