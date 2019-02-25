import {
    DISPLAY_PRODUCTS_LIST
  } from '../constants/PlpConstants';
  
  const initalState = {
    productsList : []
  };
  
  const productsList = (previousState=initalState, action) => {
      switch(action.type) {
          case DISPLAY_PRODUCTS_LIST:
              return {
                  ...previousState,
                  productsList: action.payload.productsList
              };
          default: 
              return previousState;
      }
    }
    
    export default productsList;
  