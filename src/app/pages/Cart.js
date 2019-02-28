import React from 'react'
import PropTypes from 'prop-types'
import Container from '../components/base/Container'
import UserCart from '../components/Cart/UserCart'

const Cart = ({ history }) => (
  <Container>
    <UserCart history={history} />
  </Container>
);

export default Cart;

Cart.propTypes = {
  history: PropTypes.object
}