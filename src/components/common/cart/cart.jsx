/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './cart.scss';

class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.removeItem = this.removeItem.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
  }

  removeItem(id) {
    this.props.removeFromCart(id);
  }

  toggleDropDown() {
    let open = this.state.open;
    this.setState({ open: !open });
  }

  render() {
    return (
      <div>
        <li className="slds-global-acons__itetim">
          <div className={this.state.open ? 'slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open' : 'slds-dropdown-trigger slds-dropdown-trigger_click'}>
            <button className="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action slds-incoming-notification" title="1 new notifications" aria-live="assertive"
              aria-atomic="true" onClick={this.toggleDropDown}>
              <span className="fa fa-shopping-cart fa-2x"></span>
              <span className="slds-assistive-text">{this.props.cart.cart.length} items in cart</span>
            </button>
            <span aria-hidden="true" className="slds-notification-badge slds-incoming-notification slds-show-notification">{this.props.cart.cart.length}</span>
            {
              this.props.cart.cart.length &&
              (<div className="slds-dropdown slds-dropdown_right slds-nubbin_top-right" style={{ right: '-1rem' }}>
                <ul className="slds-dropdown__list" role="menu">
                  {
                    this.props.cart.cart.map(item => {
                      return (
                        <li key={item.id} className="slds-dropdown__item" role="presentation">
                          <a href="#" role="menuitem" tabIndex="0">
                            
                              <span className="slds-truncate">{item.name}</span>
                              <span className="slds-icon slds-icon_x-small slds-icon-text-default slds-m-left_small slds-shrink-none fa fa-close" onClick={() => this.removeItem(item.id)}></span>
                            
                          </a>
                        </li>
                      )
                    })
                  }
                  <li key={56} className="slds-dropdown__item" role="presentation">
                    <a className="p-2">
                      <button className="slds-button slds-button_brand slds-button_stretch">Checkout</button>
                    </a>
                  </li>
                </ul>
              </div>)
            }
          </div>
        </li>
      </div>
    )
  }
}

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  removeFromCart: PropTypes.func.isRequired
}

export default Cart;