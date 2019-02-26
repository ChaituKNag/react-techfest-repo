import { DISPLAY_CART_DATA } from '../constants/CartConstants';

const initalState = {
    cartData : []
};

const displayCart = (previousState=initalState, action) => {
    switch(action.type) {
        case DISPLAY_CART_DATA:
            return {
                ...previousState,
                cartData: action.payload.cartData
            };
        default: 
            return previousState;
    }
  }
  
  export default displayCart; 