import {
  SET_SEARCH
} from '../actions/types'
import { reducerOf } from './helper'

const defaultState = () => ''

const setSearch = () => (searchText) => searchText

export const search = reducerOf({
  [SET_SEARCH]: setSearch
})(defaultState)