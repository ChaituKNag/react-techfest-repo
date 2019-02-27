import axios from 'axios'
import { DOMAIN, ORDER, USER_ID } from '../constants/config'

export const getOrder = () => (
  axios.get(
    `${DOMAIN}${ORDER}/${USER_ID}`
  )
)

export const orderItems = (items) => (
  axios.post(
    `${DOMAIN}${ORDER}`,
    {
      userId: USER_ID,
      statusId: 1,
      items: items
    }
  )
)