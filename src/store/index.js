import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_CATEGORIES = 'GET_CATEGORIES';

const store = createStore(combineReducers({
    "products": (state = [], action) => {
        switch(action.type){
            case 'GET_PRODUCTS':
                return [...state, action.products];

            default: return state;
        }
    },
    "categories": (state = [], action) => {
        switch(action.type){
            case 'GET_CATEGORIES':
                return [...state, action.categories];

            default: return state;
        }
    },
}), applyMiddleware(thunk))

export default store