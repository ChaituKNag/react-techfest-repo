import { SET_SEARCH } from './types'

export const setSearch = (searchText) => {
  return ({
    type: SET_SEARCH,
    payload: searchText
  })
}
