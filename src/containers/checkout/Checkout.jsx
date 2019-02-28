import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import './Checkout.scss';
import Rating from '../../components/common/rating/Rating';
import { updateCartQty,removeFromCart } from '../../store/actions/cartAction';

class Checkout extends Component {

  constructor(props) {
    super(props);
    this.removeItem = this.removeItem.bind(this);
  }

  componentWillReceiveProps() {

  }

  calculateCharge(qty, price) {
    return qty * price;
  }

  updateQty(id, evt) {
    let val = evt.target.value;
    if (val === '') {
      val = 1;
    }
    this.props.updateCartQty(id, val);
  }

  removeItem(id) {
    this.props.removeFromCart(id);
  }

  calcTotal(){
    let total = 0;
    for(let i=0;i<this.props.cart.cart.length;i++){
      total = total+(this.props.cart.cart[i].price*this.props.cart.cart[i].qty)
    }

    return total;
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="slds-text-heading_large">Cart</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="">
              <ul className="list-unstyled">
                {
                  this.props.cart.cart.map((item) => {
                    return (

                      <li key={item.id} className="media p-2 slds-card slds-has-bottom-magnet">
                        <img src={item.imageUrl} className="mr-3 media-image" alt="..." />
                        <div className="media-body">
                          <div className="row">
                            <div className="col">
                              <h5 className="mt-0 mb-1">{item.name}</h5>
                              <Rating rated={item.rating} outof={5} />
                              <div className="disp-flex slds-align_absolute-center">
                                <span className="px-2">
                                  <input type="number" className="form-control cust-width" id={item.id} value={item.qty} onChange={(evt) => this.updateQty(item.id, evt)} />
                                </span>
                                <span>
                                  &nbsp;X&nbsp;
                                </span>
                                <span>
                                  {item.price}
                                </span>
                                <span>
                                  = {this.calculateCharge(item.qty, item.price)}
                                </span>
                              </div>
                            </div>
                            <div className="col-3">
                                <div>
                                    <span><button className="slds-button" onClick={()=>this.removeItem(item.id)}>Delete Item</button></span>
                                    <span>|</span>
                                    <span><button className="slds-button">Save For Later</button></span>

                                </div>
                            </div>
                          </div>
                          
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 offset-md-9">
            <div className="pull-right">
            {this.props.cart.cart.length &&
            <>
            <div className="slds-text-align_right p-2">
            <dl className="slds-list_horizontal slds-wrap">
                <dt className="slds-item_label slds-text-color_weak" title="First Label">Order Total:</dt>
                <dd className="slds-item_detail" title="Description for first label fa fa-inr"><span className=" fa fa-inr">{this.calcTotal()}</span></dd>
                <dt className="slds-item_label slds-text-color_weak" title="First Label">Delievery Cost:</dt>
                <dd className="slds-item_detail" title="Description for first label fa fa-inr"><span className=" fa fa-inr">800</span></dd>
            </dl>
            <hr/>
            <dl className="slds-list_horizontal slds-wrap">
                <dt className="slds-item_label slds-text-color_weak slds-truncate" title="First Label">Grand Total:</dt>
                <dd className="slds-item_detail slds-truncate" title="Description for first label"><span className=" fa fa-inr">{this.calcTotal()+800}</span></dd>
            </dl>
            </div>
            </>
            }
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col">
              <div className="pull-right">
                <button className="btn btn-outline-info">Continue Shopping</button>&nbsp;
                <button className="btn brand">Proceed Checkout</button>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart
})

Checkout.propTypes = {
  cart: PropTypes.object.isRequired,
  updateCartQty: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { updateCartQty,removeFromCart })(Checkout);
