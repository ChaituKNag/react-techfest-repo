import axios from 'axios'
import { DOMAIN, GET_PRODUCT_DETAILS, GET_PRODUCT_DESCRIPTION } from '../constants/config'

export const getProductDetails = (id) => (
  axios.get(
    `${DOMAIN}${GET_PRODUCT_DETAILS}/${id}`
  )
)

export const getProductDescription = (id) => (
  axios.get(
    `${DOMAIN}${GET_PRODUCT_DESCRIPTION}/${id}`
  )
)