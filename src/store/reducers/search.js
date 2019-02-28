import {
  SET_SEARCH
} from '../actions/types'
import { reducerOf } from './helper'

const defaultState = () => ''

const setSearch = () => (search) => search

export const search = reducerOf({
  [SET_SEARCH]: setSearch
})(defaultState)