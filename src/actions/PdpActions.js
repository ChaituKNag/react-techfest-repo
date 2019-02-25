import { DISPLAY_PRODUCT_DATA } from '../constants/PdpConstants';
import axios from "axios";

export const displayProductData = (productData) => {
    return {
      type: DISPLAY_PRODUCT_DATA,
      payload: {
        productData
      }
    }
  }

export const getProductData = (productId) => {
    return (dispatch) => {
        return axios.get(`http://localhost:4567/api/product/${productId}`)
          .then(response => {
            dispatch(displayProductData(response.data))
          })
          .catch(error => {
            throw(error);
          });
      };
}