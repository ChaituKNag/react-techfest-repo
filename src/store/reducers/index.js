import { combineReducers } from 'redux'
import { user } from './user'
import { product } from './product'
import { category } from './category'
import { search } from './search'
import { page } from './page'

export default combineReducers({
  user,
  product,
  category,
  search,
  page
})
