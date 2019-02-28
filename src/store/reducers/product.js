import {
  FETCH_PRODUCT_DESCRIPTION_INIT,
  FETCH_PRODUCT_DESCRIPTION_SUCCESS,
  FETCH_PRODUCT_DESCRIPTION_ERROR
} from '../actions/types'
import { reducerOf } from './helper'

const defaultState = () => ({
  details: {},
  loading: false,
  fetchError: null,
  description: ''
})

const fetchProductDescriptionInit = (state) => () => ({ ...state, loading: true });

const fetchProductDescriptionSuccess = () => (payload) => {
  return ({ loading: false, fetchError: null, details: payload.product, description: payload.description });
}

const fetchProductDescriptionError = (state) => (payload) => ({ ...state, fetchError: payload.error })

export const product = reducerOf({
  [FETCH_PRODUCT_DESCRIPTION_INIT]: fetchProductDescriptionInit,
  [FETCH_PRODUCT_DESCRIPTION_SUCCESS]: fetchProductDescriptionSuccess,
  [FETCH_PRODUCT_DESCRIPTION_ERROR]: fetchProductDescriptionError
})(defaultState)