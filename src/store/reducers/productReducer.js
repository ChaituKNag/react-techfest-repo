import {FETCH_PRODUCTS, FETCH_CATEGORIES} from '../constants';

const initialState = {
  products: [],
  categories: []
};


export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };  
    default:
      return state;
  }
}
