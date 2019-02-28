import {
    DISPLAY_PRODUCTS_LIST,
    DISPLAY_CATEGORIES,
    FILTER_PRODUCTS_BY_CATEGORY,
    DISPLAY_PAGINATION_RESULTS,
    RESET_FILTER
  } from '../constants/PlpConstants';
  
  const initalState = {
    productsList : [],
    categories: [],
    filteredProducts: [],
    paginationData: []
  };
  
  const productsList = (previousState=initalState, action) => {
      switch(action.type) {
          case DISPLAY_PRODUCTS_LIST:
              return {
                  ...previousState,
                  productsList: action.payload.productsList,
                  filteredProducts: action.payload.productsList
              };
          case DISPLAY_CATEGORIES:
              return {
                  ...previousState,
                  categories: action.payload.categories
              };
        case DISPLAY_PAGINATION_RESULTS:
              return {
                  ...previousState,
                  paginationData: action.payload.paginationData
            };
          case FILTER_PRODUCTS_BY_CATEGORY:
            var productsList = previousState.productsList;
            var filteredProducts = productsList.filter((product) => {
                return product.categoryId === action.payload.categoryId
            });
              return {
                  ...previousState,
                  filteredProducts: filteredProducts,
                  paginationData: filteredProducts
              };
        case RESET_FILTER:
              return {
                  ...previousState,
                  filteredProducts: previousState.productsList
              };
          default: 
              return previousState;
      }
    }
    
    export default productsList;
  