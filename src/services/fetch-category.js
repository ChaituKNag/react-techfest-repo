import axios from 'axios'
import { DOMAIN, GET_CATEGORY } from '../constants/config'

export const getCategory = (id) => (
  axios.get(
    `${DOMAIN}${GET_CATEGORY}/${id}`
  )
)

export const getAllCategories = () => (
  axios.get(
    `${DOMAIN}${GET_CATEGORY}`
  )
)