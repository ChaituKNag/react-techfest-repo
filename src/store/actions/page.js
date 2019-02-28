import { SET_PAGE } from './types'

export const setPageNumber = page => dispatch => {
  dispatch({
    type: SET_PAGE,
    payload: page
  })
}
