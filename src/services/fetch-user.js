import axios from 'axios'
import { DOMAIN, GET_USER } from '../constants/config'

export const getUser = (id) => (
  axios.get(
    `${DOMAIN}${GET_USER}/${id}`
  )
)