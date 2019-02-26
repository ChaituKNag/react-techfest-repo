import axios from "axios";
import { DISPLAY_CART_DATA } from "../constants/CartConstants";

export const displayCartData = cartData => {
  return {
    type: DISPLAY_CART_DATA,
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
      })
      .catch(error => {
        throw error;
      });
  };
};
