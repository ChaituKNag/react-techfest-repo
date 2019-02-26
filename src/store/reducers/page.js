import {
  SET_PAGE
} from '../actions/types'
import { reducerOf } from './helper'

const defaultState = () => 1

const setPage = () => (page) => page

export const page = reducerOf({
  [SET_PAGE]: setPage
})(defaultState)