import { DISPLAY_PRODUCTS_LIST } from '../constants/PlpConstants';
import axios from "axios";

export const displayProductList = (productsList) => {
    return {
      type: DISPLAY_PRODUCTS_LIST,
      payload: {
        productsList
      }
    }
  }

export const getProductsList = () => {
    return (dispatch) => {
        return axios.get('http://localhost:4567/api/product')
          .then(response => {
            dispatch(displayProductList(response.data))
          })
          .catch(error => {
            throw(error);
          });
      };
}