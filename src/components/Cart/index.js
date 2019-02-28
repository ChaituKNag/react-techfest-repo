import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { withRouter } from "react-router";

import { getCartData, placeOrder } from "../../actions/CartActions";
import GridComponent from "../common/GridComponent";
import Price from "../common/Price";
import Cta from "../common/Cta";
import propTypes from 'prop-types';

import "./cart.scss";

class Cart extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.orderStatus) {
      // TO do redirect to order confirmation page
      // const location = {
      //   pathname: '/'
      // }
      // this.props.history.push(location);
    }
  }

  proceedCheckout() {
    var cartData = this.props.cartData;
    var checkoutItems = cartData.map(eachProduct => ({
      quantity: eachProduct.quantity,
      productId: eachProduct.productId
    }));
    var checkoutObj = {
      userId: 1,
      statusId: 1,
      items: checkoutItems
    };
    this.props.placeOrder(checkoutObj);
  }
  render() {
    const cartData = this.props.cartData;
    return (
      <div className="cart-page">
        <Container>
          <h4 className="cart-title">Shopping cart</h4>
          <GridComponent
            productsList={cartData}
            listView={true}
            isCart={true}
          />
          {cartData && cartData.length > 0 ? (
            <div className="total-price-section">
              <p>
                <span>Order Total:</span>
                <Price currency="$" price={this.props.subTotal} />
              </p>
              <p>
                <span>Delivery Charges:</span>
                <Price currency="$" price="800" />
              </p>
              <p className="grand-total">
                <span>Grand Total:</span>
                <Price currency="$" price={this.props.subTotal + 800} />
              </p>
              <Cta
                className="btn btn-outline-warning"
                ctaText="Continue Shopping"
                ctaType="link"
                ctaPath="/"
              />
              <Cta
                ctaColor="warning"
                ctaText="Proceed To Checkout"
                ctaType="button"
                onClickHandler={this.proceedCheckout.bind(this)}
              />
            </div>
          ) : (
            <p className="cart-empty-message">Your bag is empty !!!</p>
          )}
          {this.props.orderStatus !== "" && (
            <div className="status-message">
              <span>
                {this.props.orderStatus
                  ? "Your order has been placed successfully."
                  : "Your order cannot be placed."}
              </span>
            </div>
          )}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartData: state.cart.cartData,
    subTotal: state.cart.subTotal,
    orderStatus: state.cart.orderStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCartData: () => {
      dispatch(getCartData());
    },
    placeOrder: orderData => {
      dispatch(placeOrder(orderData));
    }
  };
};

Cart.propTypes = {
  cartData: propTypes.object,
  subTotal: propTypes.number
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Cart));
