import {
  FETCH_CATEGORY_INIT,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR,
  UPDATE_SELECTED_CATEGORY,
  EXPAND_CATEGORY_ITEM
} from './types'

import { getAllCategories } from '../../services/fetch-category';

const fetchCategoryInit = () => ({
  type: FETCH_CATEGORY_INIT
})

const fetchCategorySuccess = category => ({
  type: FETCH_CATEGORY_SUCCESS,
  payload:  category 
})

const fetchCategoryError = error => ({
  type: FETCH_CATEGORY_ERROR,
  payload: { error }
})

export const expandCategory = category => dispatch => {
  dispatch({
    type: EXPAND_CATEGORY_ITEM,
    payload: category
  })
}

export const updateSelectedCategory = categoryID => dispatch => {
  dispatch({
    type: UPDATE_SELECTED_CATEGORY,
    payload: categoryID
  })
}

export const fetchCategories = () => (dispatch) => {
  dispatch(fetchCategoryInit())
  getAllCategories().then(response => {
    if(response){
      dispatch(fetchCategorySuccess(response.data))
      //Dispatch event for Product filter
    }
  })
  .catch(error => dispatch(fetchCategoryError(error)))
}