import {
  FETCH_CART_INIT,
  FETCH_CART_SUCCESS,
  FETCH_CART_ERROR,
  UPDATE_QUANTITY,
  DELETE_FROM_CART
} from './types'

import { getCart } from '../../services/cart';

export const fetchCartInit = () => ({
  type: FETCH_CART_INIT
})

export const fetchCartSuccess = cart => ({
  type: FETCH_CART_SUCCESS,
  payload:  cart 
})

export const fetchCartError = error => ({
  type: FETCH_CART_ERROR,
  payload: { error }
})


export const fetchCart = (id) => (dispatch) => {
  dispatch(fetchCartInit())
  getCart(id).then(response => {
    if (response) {
      dispatch(fetchCartSuccess(response.data))
    }
  })
  .catch(error => dispatch(fetchCartError(error)))
}

export const updateQuantity = (quantity, id) => dispatch => {
  dispatch ({
    type: UPDATE_QUANTITY,
    payload: {quantity: quantity, id: id}
  })
}

export const deleteFromCart = (id) => dispatch => {
  dispatch ({
    type: DELETE_FROM_CART,
    payload: id
  })
}

