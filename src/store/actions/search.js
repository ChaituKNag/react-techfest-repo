import { SET_SEARCH } from './types'

export const setSearch = searchText => dispatch => {
  dispatch ({
    type: SET_SEARCH,
    payload: searchText
  })
}
