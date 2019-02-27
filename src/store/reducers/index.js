import { combineReducers } from 'redux'
import { user } from './user'
import { product } from './product'
import { category } from './category'
import { search } from './search'
import { page } from './page'
import { cart } from './cart'
import { productslist } from "./productlist"

export default combineReducers({
  user,
  product,
  productslist,
  category,
  search,
  page,
  cart
})
