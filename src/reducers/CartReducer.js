import { DISPLAY_CART_DATA, UPDATE_CART, DISPLAY_STATUS_MESSAGE, UPDATE_PRICE, ORDER_UPDATE } from '../constants/CartConstants';

const initalState = {
    cartData : [],
    status: '',
    cartCount: 0,
    total: 0,
    subTotal: 0
};

const displayCart = (previousState=initalState, action) => {
    switch(action.type) {
        case DISPLAY_CART_DATA:
            var subTotal = totalPrice(action.payload);
            return {
                ...previousState,
                cartData: action.payload.cartData,
                subTotal
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
        case UPDATE_PRICE:
            subTotal = totalPrice(previousState, action.payload);
            return {
                ...previousState,
                subTotal
            };
        case ORDER_UPDATE:
        return {
            ...previousState,
            status: action.payload.orderStatus
        };
        default: 
            return previousState;
    }
  }

  export const totalPrice = (state, payload) => {
    const products = state.cartData;
    return products.reduce((totalPrice, eachProduct) => {
        var product = eachProduct.product;
        var quantity = eachProduct.quantity;
        if(payload && payload.productId === product.id) {
            quantity = payload.quantity * 1;
            eachProduct.quantity = quantity; 
        }
        return totalPrice + product.price * quantity;
      }, 0);
};
  
  export default displayCart; 