import {
    DISPLAY_PRODUCTS_LIST,
    DISPLAY_CATEGORIES,
    FILTER_PRODUCTS_BY_CATEGORY
  } from '../constants/PlpConstants';
  
  const initalState = {
    productsList : [],
    categories: [],
    filteredProducts: []
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
          case FILTER_PRODUCTS_BY_CATEGORY:
            var productsList = previousState.productsList;
            var filteredProducts = productsList.filter((product) => {
                return product.categoryId === action.payload.categoryId
            });
              return {
                  ...previousState,
                  filteredProducts: filteredProducts
              };
          default: 
              return previousState;
      }
    }
    
    export default productsList;
  