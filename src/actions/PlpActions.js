import { DISPLAY_PRODUCTS_LIST, DISPLAY_CATEGORIES, FILTER_PRODUCTS_BY_CATEGORY, DISPLAY_PAGINATION_RESULTS, RESET_FILTER } from '../constants/PlpConstants';
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
        throw (error);
      });
  };
}

export const displayCategories = (categories) => {
  return {
    type: DISPLAY_CATEGORIES,
    payload: {
      categories
    }
  }
}

export const getCategories = () => {
  return (dispatch) => {
    return axios.get('http://localhost:4567/api/category')
      .then(response => {
        dispatch(displayCategories(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
}

export const filterProductsByCategory = (categoryId) => {
  return {
    type: FILTER_PRODUCTS_BY_CATEGORY,
    payload: {
      categoryId
    }
  }
}

export const updatePaginationResults = (paginationData) => {
  return {
    type: DISPLAY_PAGINATION_RESULTS,
    payload: {
      paginationData
    }
  }
}

export const resetFilter = () => {
  return {
    type: RESET_FILTER
  }
}

