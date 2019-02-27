import { ADD_PRODUCT, REMOVE_PRODUCT } from "../constants";

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