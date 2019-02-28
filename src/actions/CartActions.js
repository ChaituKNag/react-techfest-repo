import axios from "axios";
import { DISPLAY_CART_DATA, UPDATE_CART, UPDATE_PRICE, ORDER_UPDATE, REMOVE_FROM_CART, EMPTY_CART_DATA } from "../constants/CartConstants";

export const displayCartData = cartData => {
  return {
    type: DISPLAY_CART_DATA,
    payload: {
      cartData
    }
  };
};

export const updateCart = cartData => {
  return {
    type: UPDATE_CART,
    payload: {
      cartData
    }
  };
};

export const removeItem = productId => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      productId
    }
  };
};

export const getCartData = () => {
  return dispatch => {
    return axios
      .get(`http://localhost:4567/api/cart/1`)
      .then(response => {
        dispatch(displayCartData(response.data));
        dispatch(updateCart(response.data))
      })
      .catch(error => {
        throw error;
      });
  };
};

export const updatePrice= (productId, quantity) => {
    return {
      type: UPDATE_PRICE,
      payload: {
        productId,
        quantity
      }
  }
}

export const orderUpdate= (orderStatus) => {
  return {
      type: ORDER_UPDATE,
      payload: {
        orderStatus
      }
  }
}

export const placeOrder = (orderData) => {
  return dispatch => {
    return axios
      .post(`http://localhost:4567/api/order`, orderData)
      .then(response => {
        dispatch(orderUpdate(response.data));
        setTimeout(() => {
          dispatch(emptyCart());
        }, 500)
      })
      .catch(error => {
        throw error;
      });
  };
};

export const emptyCart = () => {
  return {
    type: EMPTY_CART_DATA
  };
};
