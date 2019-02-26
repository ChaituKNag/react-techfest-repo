import { DISPLAY_PRODUCT_DATA, UPDATE_CART } from "../constants/PdpConstants";
import axios from "axios";

export const displayProductData = productData => {
  return {
    type: DISPLAY_PRODUCT_DATA,
    payload: {
      productData
    }
  };
};

export const getProductData = productId => {
  return dispatch => {
    return axios
      .get(`http://localhost:4567/api/product/${productId}`)
      .then(response => {
        dispatch(displayProductData(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const updateCart = productData => {
  return {
    type: UPDATE_CART,
    payload: {
      productData
    }
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
        dispatch(updateCart(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};
