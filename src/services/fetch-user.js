import axios from 'axios'
import { GET_USER } from '../constants/config'

export const getUser = (id) => (
  axios.get(
    `${GET_USER}/${id}`
  )
)