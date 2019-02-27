import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import HeaderTag from '../base/HeaderTag';
import { connect } from 'react-redux';
import { white, offwhite } from '../../../styles/colors';
import ProductListItem from '../Products/ProductListItem';
import { fetchCart, deleteFromCart } from '../../../store/actions/cart';
import { selectCart } from '../../../store/selectors'
import Button from '../base/Button';
import { PRIMARY, SECONDARY } from '../../../constants/properties';
import { orderItems } from '../../../services/order';

const ListWrapper = styled.div`
  background-color: ${white};
  margin: 20px 0;
  -webkit-box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.22);
  -moz-box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.22);
  box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.22);
`

const CartWrapper = styled.div`
  padding: 20px 30px;
`

const PriceWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: flex-end;
`

const Price = styled.div`
  display: flex;
  div{
    width: 300px;
  }
`

const TotalPrice = styled.div`
  display: flex;
  border-top: 1px solid ${offwhite};
  margin-top: 20px;
  padding: 10px 0;
  div{
    width: 300px;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  > * {
    margin-left: 15px;
  }

`

class UserCart extends PureComponent {

  componentDidMount () {
    const { fetchCart } = this.props;
    fetchCart();
  }

  getTotal = () => {
    let total = 0;
    const {cart: { list} } = this.props;
    list.forEach(item => {
      total = total + (item.product.price * item.quantity);
    })

    return total;
  }

  checkout = () => {
    orderItems(this.props.cart.list.map(
      ({ quantity, productId }) => ({ quantity: quantity, productId: productId })
    )).then(response => {
      if (response) {
        alert('Your order has been placed. Pay on Delivery! Happy Shopping');
        this.props.history.push('/');
      }
    })
    .catch(error => console.error(error));;
  }
  
  render(){
    const { cart: { list }, history, deleteFromCart } = this.props;
    return (
      <CartWrapper>
        <HeaderTag as='h4'>SHOPPING CART</HeaderTag>
        <ListWrapper>
          {
            list.length > 0 && list.map(item => <ProductListItem key={item.id} {...item.product} id={item.id} quantity={item.quantity} showActions showPricing deleteFromCart={deleteFromCart}/>)
          }
        </ListWrapper>
        <PriceWrapper>
          <div>
            <Price><div>Order Total:</div>${this.getTotal()}</Price>
          </div>
        </PriceWrapper>
        <ButtonWrapper>
          <Button type={SECONDARY} onClick={() => history.push('/')}>Continue Shopping</Button>
          <Button type={PRIMARY} onClick={this.checkout}>Proceed to Checkout</Button>
        </ButtonWrapper>
      </CartWrapper>
    )
  }
  
}

UserCart.propTypes = {
  cart: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    history: PropTypes.object
  })
}

const mapStateToProps = (state) => ({
  cart: selectCart(state)
})

export default connect(
  mapStateToProps,
  {
    fetchCart,
    deleteFromCart
  }
)(UserCart)