import {ADD_PRODUCT,REMOVE_PRODUCT,UPDATE_QTY} from '../constants';
import _ from 'underscore';

const initialState = {
  cart:[]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
                      var cartState = state.cart;
                      cartState = cartState ? cartState : [];
                      var newState = [...cartState, {...action.payload,qty:1}]
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
    case UPDATE_QTY:{
                    console.log("in reducer",action.id,action.qty,state.cart);
                    var cart = state.cart;
                    var qty = action.qty;
                    var id =action.id;
                    for(let i=0;i<cart.length;i++){
                      if(cart[i].id === id){
                        console.log("found product");
                        cart[i].qty = qty;
                        break;
                      }
                    }
                    console.log(cart)
                    return {
                      cart:cart
                    }
                    };

  default:
          return state;                  
  }
}