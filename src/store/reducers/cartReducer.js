import {ADD_PRODUCT,REMOVE_PRODUCT} from '../constants';
import _ from 'underscore';

const initialState = {
  cart:[]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
                      var cartState = state.cart;
                      cartState = cartState ? cartState : [];
                      var newState = [...cartState, action.payload]
                      return {
                        ...state,
                        cart: newState
                      };
    case REMOVE_PRODUCT:
                      var cartStateR = state.cart;
                      state = _.filter(cartStateR, function (item) {
                        return item.id !== action.payload
                      });
                      return {
                        cart: state
                      };
  default:
          return state;                  
  }
}