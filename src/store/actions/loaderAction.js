import { START_LOADING, STOP_LOADING } from "../constants";

export const startLoding = () => dispatch => {
  return dispatch({
    type: START_LOADING
  })
}


export const stopLoding = () => dispatch => {
  return dispatch({
    type: STOP_LOADING
  })
}