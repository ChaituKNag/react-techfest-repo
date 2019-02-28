import axios from 'axios'
import { DOMAIN, CART, USER_ID } from '../constants/config'

export const getCart = () => (
  axios.get(
    `${DOMAIN}${CART}/${USER_ID}`
  )
)

export const addToCart = (quantity, productId) => (
  axios.post(
    `${DOMAIN}${CART}`,
    {
      userId: USER_ID,
      quantity: quantity,
      productId: productId
    }
  )
)