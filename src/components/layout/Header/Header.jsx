import React, { Component } from 'react'
import './Header.scss';
import SearchBar from '../../common/searchbar/SearchBar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Cart from '../../common/cart/cart';
import { fetchProducts } from '../../../store/actions/productAction';
import { removeFromCart } from '../../../store/actions/cartAction';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class Header extends Component {

  
  render() {
    console.log(this.props);
    return (
      <header className="navbar navbar-custom navbar-dark bd-navbar">
        <div className="nav-content">
          <Link to="/" className="navbar-cust-brand">Ecommerce</Link>
          <div className="search">
            <SearchBar  {...this.props} />
          </div>
          <div className="nav-control">
            <span>
            <Cart {...this.props}/>
            </span>
            <span className="slds-avatar slds-avatar_medium slds-avatar_circle">
              <span className="slds-icon_container">
              <img alt="Person name" src='https://randomuser.me/api/portraits/men/97.jpg' title="Tommy Wheeler" />
              </span>
            </span>
          </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  products: state.product
})

Header.propTypes = {
  removeFromCart: PropTypes.func.isRequired,
  fetchProducts: PropTypes.func.isRequired,
  product: PropTypes.any,
  cart:PropTypes.any
}

export default  withRouter(connect(mapStateToProps, { removeFromCart, fetchProducts})(Header));
