import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_CATEGORIES = 'GET_CATEGORIES';

const store = createStore(combineReducers({
    "products": (state = [], action) => {
        switch(action.type){
            case 'GET_PRODUCTS':
                // return [...state, action.products];
                return {...state, "a": action.products}

            case 'FETCH_PRODUCTS_ON_SEARCH':
                let newState3 = [...state];

                newState3[0].map((product) => {
                    if(product.name.toLowerCase().includes(action.searchTerm.toLowerCase())){
                        product.isSearched = true;
                        return product;
                    }  
                });

                return [...newState3, action.products];

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
    "productData": (state = [], action) => {
        switch(action.type){
            case 'GET_PRODUCT_DETAIL_BY_ID':
                return [...state, action.productData]

            case 'ADD_PRODUCT_TO_BAG':
                    let newState = [...state];

                    newState.map((product) => {
                        if(product.id === action.product.id){
                            product.isAddedToBag = true;
                            return product;
                        }
                    });

                return newState;

            case 'GET_PRODUCTS_IN_BAG':
                let newState2 = [...state];

                newState2.filter(function(product){
                    return product.isAddedToBag = true;
                })

                return newState2;

            case 'DELETE_PRODUCT_FROM_BAG':
                    let newState1 = [...state];

                    newState1.map((product) => {
                        if(product.id === action.product.id && product.isAddedToBag){
                            product.isAddedToBag = false;
                            return product;
                        }
                    });

                return newState1;

            

            default: return state
        }
    }
}), applyMiddleware(thunk))

export default store