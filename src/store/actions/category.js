import {
  FETCH_CATEGORY_INIT,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR
} from './types'

import { getAllCategories } from '../../services/fetch-category';

export const fetchCategoryInit = () => ({
  type: FETCH_CATEGORY_INIT
})

export const fetchCategorySuccess = user => ({
  type: FETCH_CATEGORY_SUCCESS,
  payload:  user 
})

export const fetchCategoryError = error => ({
  type: FETCH_CATEGORY_ERROR,
  payload: { error }
})
 

export const fetchCategories = () => (dispatch) => {
  dispatch(fetchCategoryInit())
  getAllCategories().then(response => {
    if(response){
      dispatch(fetchCategorySuccess(response.data))
    }
  })
  .catch(error => dispatch(fetchCategoryError(error)))
}