import { DISPLAY_CART_DATA, UPDATE_CART, DISPLAY_STATUS_MESSAGE } from '../constants/CartConstants';

const initalState = {
    cartData : [],
    status: false,
    cartCount: 0
};

const displayCart = (previousState=initalState, action) => {
    switch(action.type) {
        case DISPLAY_CART_DATA:
            return {
                ...previousState,
                cartData: action.payload.cartData
            };
        case UPDATE_CART:
            return {
                ...previousState,
                cartCount: action.payload.cartData ? action.payload.cartData.length : 0
            };
        case DISPLAY_STATUS_MESSAGE:
            return {
                ...previousState,
                status: action.payload.status
            };
        default: 
            return previousState;
    }
  }
  
  export default displayCart; 