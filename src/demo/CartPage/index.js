import React, { Component } from 'react';
import CartItem from '../CartItem';
import { connect } from 'react-redux';

class CartPage extends Component {
  render(){
    return(
      <div>
        { this.props.cartDetails.map((product)=>{
          return <CartItem key={product.id} product={product.product}/>  
        })}

        <div className="price">
              <p>
                <span>Order Total:</span>
                  $14490
              </p>
              <p>
                <span>Delivery Charges:</span>
                  $800
              </p>
              <p className="grand-total">
                <span>Grand Total:</span>
                  $15249
              </p>
              {/* <Cta
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
              /> */}
            </div> 
 


        
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    cartDetails : state.CartDetailsReducer
  }
}

export default connect(mapStateToProps,null)(CartPage);