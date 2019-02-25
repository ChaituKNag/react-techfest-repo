import {
  SET_SEARCH
} from '../actions/types'
import { reducerOf } from './helper'

const defaultState = () => ''

const setSearch = () => (searchText) => searchText

export const status = reducerOf({
  [SET_SEARCH]: setSearch
})(defaultState)