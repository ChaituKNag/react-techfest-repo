import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_QTY } from "../constants";

export const addToCart = (product) => dispatch => {
  return dispatch({
    type: ADD_PRODUCT,
    payload: product
  })
}

export const removeFromCart = (id) => dispatch => {
  return dispatch({
  type: REMOVE_PRODUCT,
    payload: id
  })
}

export const updateCartQty = (id,qty) => dispatch => {
  return dispatch({
    type: UPDATE_QTY,
    id:id,
    qty:qty
  })
}