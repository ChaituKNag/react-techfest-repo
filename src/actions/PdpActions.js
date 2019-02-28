import { DISPLAY_PRODUCT_DATA } from "../constants/PdpConstants";
import { DISPLAY_STATUS_MESSAGE } from "../constants/CartConstants";
import { getCartData } from "../actions/CartActions";

import axios from "axios";

export const displayProductData = productData => {
  return {
    type: DISPLAY_PRODUCT_DATA,
    payload: {
      productData
    }
  };
};

export const displayStatusMessage = (status) => {
  return {
    type: DISPLAY_STATUS_MESSAGE,
    payload: {
      status
    }
  }
}

export const getProductData = productId => {
  return dispatch => {
    return axios
      .get(`http://localhost:4567/api/product/${productId}`)
      .then(response => {
        dispatch(displayStatusMessage(''));
        dispatch(displayProductData(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const addToCart = ({ userId = 1, id, quantity = 1 }) => {
  return dispatch => {
    return axios
      .post("http://localhost:4567/api/cart/", {
        userId,
        productId: id,
        quantity
      })
      .then(response => {
        dispatch(displayStatusMessage(response.data));
        dispatch(getCartData());
      })
      .catch(error => {
        throw error;
      });
  };
};
