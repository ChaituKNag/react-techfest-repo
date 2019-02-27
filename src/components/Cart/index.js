import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import { getCartData } from '../../actions/CartActions';
import GridComponent from "../common/GridComponent";
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
                    <div className="price-section">
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
        cartData: state.cart.cartData
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