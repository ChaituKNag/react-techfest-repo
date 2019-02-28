import React from 'react'
import Container from '../components/base/Container'
import UserCart from '../components/Cart/UserCart'

const Cart = ({history}) => (
    <Container>
       <UserCart history={history} />
    </Container>
);

export default Cart;