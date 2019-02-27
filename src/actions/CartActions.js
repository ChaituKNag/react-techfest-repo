import axios from "axios";
import { DISPLAY_CART_DATA, UPDATE_CART } from "../constants/CartConstants";

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
