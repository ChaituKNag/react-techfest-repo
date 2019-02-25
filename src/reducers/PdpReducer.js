import {
  DISPLAY_PRODUCT_DATA
} from '../constants/PdpConstants';

const initalState = {
    productData : {}
};

const productData = (previousState=initalState, action) => {
    switch(action.type) {
        case DISPLAY_PRODUCT_DATA:
        window.console.log(action.payload.productData);
            return {
                ...previousState,
                ...action.payload.productData
            };
        default: 
            return previousState;
    }
  }
  
  export default productData;
