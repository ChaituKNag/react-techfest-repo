import {
  SEARCH_RESULTS_INIT,
  SEARCH_RESULTS_SUCCESS,
  SEARCH_RESULTS_ERROR
} from './types'

import { searchProducts } from '../../services/search'

const searchResultsInit = () => ({
  type: SEARCH_RESULTS_INIT
})

const searchResultsSuccess = user => ({
  type: SEARCH_RESULTS_SUCCESS,
  payload: user
})

const searchResultsError = error => ({
  type: SEARCH_RESULTS_ERROR,
  payload: { error }
})


export const getSearchResults = (val) => (dispatch) => {
  if(val && val.length){
    dispatch(searchResultsInit())
    searchProducts(val).then(response => {
      if (response) {
        dispatch(searchResultsSuccess(response.data))
      }
    })
    .catch(error => dispatch(searchResultsError(error)))
  } else{
    dispatch(searchResultsSuccess([]))
  }
}
