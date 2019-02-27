import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import { getCartData } from '../../actions/CartActions';
import GridComponent from "../common/GridComponent";
import Price from "../common/Price";
import Cta from '../common/Cta';

import './cart.scss';

class Cart extends Component {
    render() {
        const cartData = this.props.cartData || [];
        return(
            <div className="cart-page">
                <Container>
                    <h4 className="cart-title">Shopping cart</h4>
                    <GridComponent productsList={cartData} listView={true} isCart={true}></GridComponent>
                    <div className="total-price-section">
                        <p><span>Order Total:</span><Price currency="$" price={this.props.subTotal}/></p>
                        <p><span>Delivery Charges:</span><Price currency="$" price="800"/></p>
                        <p><span>Grand Total:</span><Price currency="$" price={this.props.subTotal + 800}/></p>
                        <Cta className="btn btn-outline-warning" ctaText="Continue Shopping" ctaType="link" ctaPath="/"></Cta>
                        <Cta ctaColor="warning" ctaText="Proceed To Checkout" ctaType="button"></Cta>
                    </div>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartData: state.cart.cartData,
        subTotal: state.cart.subTotal
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      getCartData: () => {
        dispatch(getCartData());
      }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Cart);