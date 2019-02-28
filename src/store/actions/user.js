import {
  FETCH_USER_INIT,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR
} from './types'

import { getUser } from '../../services/fetch-user'

const fetchUserInit = () => ({
  type: FETCH_USER_INIT
})

const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  payload: user
})

const fetchUserError = error => ({
  type: FETCH_USER_ERROR,
  payload: { error }
})


export const fetchUser = (id) => (dispatch) => {
  dispatch(fetchUserInit())
  getUser(id).then(response => {
    if (response) {
      dispatch(fetchUserSuccess(response.data))
    }
  })
    .catch(error => dispatch(fetchUserError(error)))
}
