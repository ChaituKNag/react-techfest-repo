import React, { PureComponent } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import HeaderTag from '../base/HeaderTag'
import { connect } from 'react-redux'
import { fetchCart, deleteFromCart } from '../../../store/actions/cart'
import { selectCart } from '../../../store/selectors'
import { orderItems } from '../../../services/order'
import Button from '../base/Button'
import { white } from '../../../styles/colors'
import ProductListItem from '../Products/ProductListItem'
import { PRIMARY, MEDIUM, SECONDARY } from '../../../constants/properties'

const ListWrapper = styled.div`
  background-color: ${white};
  margin: 20px 0;
  -webkit-box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.22);
  -moz-box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.22);
  box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.22);
`

const CartWrapper = styled.div`
  padding: 30px 0;
`

const PriceWrapper = styled.div`
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Price = styled.div`
  display: flex;
  width: 30%;
  span:first-child{
    flex-basis: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 25px;
  }
  span:last-child{
    display:flex;
    justify-content: flex-end;
    flex-basis:40%;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction:row;
  margin-top: 20px;
  justify-content: flex-end;
  padding: 0 30px;
  div + div{
    margin-left: 10px;
  }
`

const EmptyMessage = styled.div`
  padding: 20px;
  text-align: center;
  font-size: 1.25rem;
`

class UserCart extends PureComponent {

  componentDidMount() {
    const { fetchCart } = this.props;
    fetchCart();
  }

  getTotal = () => {
    let total = 0
    const { cart: { list } } = this.props
    list.forEach(item => {
      total = total + (item.product.price * item.quantity)
    })

    return total
  }

  checkout = () => {
    orderItems(this.props.cart.list.map(
      ({ quantity, productId }) => ({ quantity: quantity, productId: productId })
    )).then(response => {
      if (response) {
        alert('Your order has been placed. Pay on Delivery! Happy Shopping');
        this.props.history.push('/')
      }
    })
      .catch(error => console.error(error))
  }

  render() {
    const { cart: { list }, history, deleteFromCart } = this.props
    return (
      <CartWrapper>
        <HeaderTag as='h5'>SHOPPING CART</HeaderTag>
        {
          list.length > 0  ?
          <div>
            <ListWrapper>
              {
                list.length > 0 && list.map(item => <ProductListItem key={item.id} {...item.product} id={item.id} quantity={item.quantity} showActions showPricing deleteFromCart={deleteFromCart} />)
              }
            </ListWrapper>
            <PriceWrapper>
              <Price><span>Order Total:</span><span>${this.getTotal()}</span></Price>
            </PriceWrapper>
            <ButtonWrapper>
              <Button type={SECONDARY} size={MEDIUM} onClick={() => history.push('/')}>Continue Shopping</Button>
              <Button type={PRIMARY} size={MEDIUM} onClick={this.checkout}>Proceed to Checkout</Button>
            </ButtonWrapper>
          </div> : <EmptyMessage>Cart is Empty!</EmptyMessage>
        }
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