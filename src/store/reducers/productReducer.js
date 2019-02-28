import {FETCH_PRODUCTS, FETCH_CATEGORIES, FETCH_DETAIL} from '../constants';

const initialState = {
  products: [],
  categories: [],
  detail: {}
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
    case FETCH_DETAIL:
      return {
        ...state,
        detail:action.payload
      }
    default:
      return state;
  }
}
