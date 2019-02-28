import axios from 'axios'
import { DOMAIN, SEARCH } from '../constants/config'

export const searchProducts = (text) => (
  axios.post(
    `${DOMAIN}${SEARCH}`,
    { '$or': [ { 'name': { '$like' : `%${text}%` } }, { 'price': { '$like': text } } ] }
  )
)