import { combineReducers } from 'redux'
import { user } from './user'
import { product } from './product'
import { category } from './category'
import { search } from './search'
import { page } from './page'
import { cart } from './cart'
import { productList } from "./product-list"
import { searchResults } from './search-results'

export default combineReducers({
  user,
  product,
  productList,
  category,
  search,
  page,
  cart,
  searchResults
})
