import {
  FETCH_PRODUCT_INIT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_ERROR,
  PAGINATE_PRODUCTS
} from './types'

import { getAllProducts } from '../../services/fetch-product-details';

const fetchAllProductsInit = () => ({
  type: FETCH_PRODUCT_INIT
})

const fetchAllProductsSuccess = (data) => ({
  type: FETCH_PRODUCT_SUCCESS,
  payload: data
})

const fetchAllProductsError = (error) => ({
  type: FETCH_PRODUCT_ERROR,
  payload: error
})

const paginateProducts = pageData => ({
  type: PAGINATE_PRODUCTS,
  payload: pageData
})

export const updateProductsPageData = (data) => (dispatch) => {
  console.log(data)
  dispatch(paginateProducts(data))
}

export const fetchProducts = () => (dispatch) => {
  dispatch(fetchAllProductsInit)
  getAllProducts().then(response => {
    if(response){
      dispatch(fetchAllProductsSuccess(response.data))
    }
  })
  .catch(error => dispatch(fetchAllProductsError(error)))
} 
