import {
  FETCH_CART_INIT,
  FETCH_CART_SUCCESS,
  FETCH_CART_ERROR,
  UPDATE_QUANTITY,
  DELETE_FROM_CART
} from '../actions/types'
import { reducerOf } from './helper'

const defaultState = () => ({
  list: [],
  loading: false,
  fetchError: null
})

const fetchCartInit = () => () => ({ loading: true, fetchError: null, list: [] })

const fetchCartSuccess = () => (payload) => {
  return ({ loading: false, fetchError: null, list: payload })
}

const fetchCartError = () => (payload) => ({ loading: false, fetchError: payload.error, list: [] })

const updateQuantity = (state) => (payload) => {

  const list = state.list.map(value => {
    if (value.id === payload.id) {
      return { ...value, quantity: payload.quantity }
    }
    return value
  })

  return ({ ...state, list: list });
}

const deleteFromCart = (state) => (payload) => {
  state.list.splice(payload - 1, 1);

  return ({ ...state })
}

export const cart = reducerOf({
  [FETCH_CART_INIT]: fetchCartInit,
  [FETCH_CART_SUCCESS]: fetchCartSuccess,
  [FETCH_CART_ERROR]: fetchCartError,
  [UPDATE_QUANTITY]: updateQuantity,
  [DELETE_FROM_CART]: deleteFromCart
})(defaultState)