import React from 'react';
import styled from 'styled-components';
import HeaderTag from '../base/HeaderTag';
import { white, offwhite } from '../../../styles/colors';
import ProductListItem from '../Products/ProductListItem'

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

const UserCart = () => {

  return (
    <CartWrapper>
      <HeaderTag as='h4'>SHOPPING CART</HeaderTag>
      <ListWrapper>
        <ProductListItem name={'Amazon Echo Dot'} rating={4} numberOfRaters={140} subText={'Sub line text'} imageUrl={'https://images-na.ssl-images-amazon.com/images/I/910HREIJBdL._SL1500_.jpg'} showActions showPricing></ProductListItem>
        <ProductListItem name={'Amazon Echo Dot'} rating={4} numberOfRaters={140} subText={'Sub line text'} imageUrl={'https://images-na.ssl-images-amazon.com/images/I/910HREIJBdL._SL1500_.jpg'} showActions showPricing></ProductListItem>
        <ProductListItem name={'Amazon Echo Dot'} rating={4} numberOfRaters={140} subText={'Sub line text'} imageUrl={'https://images-na.ssl-images-amazon.com/images/I/910HREIJBdL._SL1500_.jpg'} showActions showPricing></ProductListItem>
      </ListWrapper>
      <PriceWrapper>
        <div>
          <Price><div>Order Total:</div>$720000</Price>
          <Price><div>Delivery Chargers:</div> $800</Price>
          <TotalPrice><div>Grand Total:</div>$800000</TotalPrice>
        </div>
      </PriceWrapper>
    </CartWrapper>
  )
}

export default UserCart;