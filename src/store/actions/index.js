import axios from 'axios';

export const getProducts = () => ({
    type: "GET_PRODUCTS"
});

//pure
export const loadProducts = (jsonData) => {
    return {
      type : "GET_PRODUCTS",
      products : jsonData.map(product => {
        return {
          ...product
        }
      })
    };
}


//async - impure
export const fetchProductsFromServer = () => {
    return (dispatch) => {
        // return axios.get('http://localhost:4567/api/product')
        // .then(products => {
        //   console.log('Products', products);
        //   dispatch(loadProducts(products));
        // });
        dispatch(loadProducts([]));
    }
}