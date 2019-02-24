import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

export const GET_PRODUCTS = 'GET_PRODUCTS';

const store = createStore(combineReducers({
    "products": (state = [], action) => {
        switch(action.type){
            case 'GET_PRODUCTS':
                return [...state, action.type];

            default: return state;
        }
    }
}, applyMiddleware(thunk)))

export default store