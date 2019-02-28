import {
  FETCH_USER_INIT,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR
} from '../actions/types'
import { reducerOf } from './helper'

const defaultState = () => ({
  details: {},
  loading: false,
  fetchError: null
})

const fetchUserInit = () => () => ({ loading: true, fetchError: null, details: {} })

const fetchUserSuccess = () => (payload) => {
  return ({ loading: false, fetchError: null, details: payload })
}

const fetchUserError = () => (payload) => ({ loading: false, fetchError: payload.error, details: {} })

export const user = reducerOf({
  [FETCH_USER_INIT]: fetchUserInit,
  [FETCH_USER_SUCCESS]: fetchUserSuccess,
  [FETCH_USER_ERROR]: fetchUserError
})(defaultState)