import {
  FETCH_PRODUCT_INIT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_ERROR,
  FILTER_PRODUCT_BY_CATEGORY,
  PAGINATE_PRODUCTS
} from '../actions/types'
import { reducerOf } from './helper'
import { PAGINATION_LIMIT } from "../../constants/config";

const defaultState = () => ({
  loading: false,
  fetchError: null,
  data: [],
  selectedCategory: null,
  offset: 0,
  limit: PAGINATION_LIMIT
})

const fetchProductInit = (state) => () => ({...state,  fetchError: null, loading: true})
const fetchProductSuccess = (state) => (payload) => ({...state, data: payload, fetchError: null, loading: false})
const fetchProductError = (state) => (payload) => ({...state, fetchError: payload, loading: false})
const filterProductByCategory = (state) => (payload) => {

  return {
    ...state,
    selectedCategory: payload,
    offset: 0,
    limit: PAGINATION_LIMIT
}

}
const paginateProducts = (state) => (payload) => ({
  ...state, offset: payload.offset, limit: payload.limit
})

export const productslist = reducerOf({
  [FETCH_PRODUCT_INIT]: fetchProductInit,
  [FETCH_PRODUCT_SUCCESS]: fetchProductSuccess,
  [FETCH_PRODUCT_ERROR]: fetchProductError,
  [FILTER_PRODUCT_BY_CATEGORY]: filterProductByCategory,
  [PAGINATE_PRODUCTS]: paginateProducts,
})(defaultState)
