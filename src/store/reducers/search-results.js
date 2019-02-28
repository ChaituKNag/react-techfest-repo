import {
  SEARCH_RESULTS_INIT,
  SEARCH_RESULTS_SUCCESS,
  SEARCH_RESULTS_ERROR
} from '../actions/types'
import { reducerOf } from './helper'

const defaultState = () => ({
  list: [],
  loading: false,
  fetchError: null
})

const searchResultsInit = () => () => ({ loading: true, fetchError: null, list: [] })

const searchResultsSuccess = () => (payload) => {
  return ({ loading: false, fetchError: null, list: payload })
}

const searchResultsError = () => (payload) => ({ loading: false, fetchError: payload.error, list: [] })

export const searchResults = reducerOf({
  [SEARCH_RESULTS_INIT]: searchResultsInit,
  [SEARCH_RESULTS_SUCCESS]: searchResultsSuccess,
  [SEARCH_RESULTS_ERROR]: searchResultsError
})(defaultState)