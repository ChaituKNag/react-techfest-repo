import { combineReducers } from 'redux'
import { user } from './user'
import { product } from './product'
import { category } from './category'

export default combineReducers({
  user,
  product,
  category
})
