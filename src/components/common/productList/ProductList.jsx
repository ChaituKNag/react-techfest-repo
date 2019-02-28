import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Rating from '../rating/Rating';
import './ProductList.scss'

class ProductList extends Component {
  render() {
    return (
      <div className="media slds-card slds-has-bottom-magnet p-3">
        <img src={this.props.product.imageUrl} className="align-self-center mr-3 media-image" alt="..." />
          <div className="media-body">
            <h5 className="mt-0">{this.props.product.name}</h5>
            <Rating rated={this.props.product.rating} outof={5} />
            <div>
              <span className="disc-rate">
                <i className="fa fa-inr"></i>{this.props.product.price * (100.0 - this.props.product.discount) / 100.0}
              </span>
              <span className="org-rate pl-2">
              <i className="fa fa-inr"></i>{this.props.product.price}
              </span>
            </div>
            {/* <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p> */}
          </div>
</div>
        )
      }
    }
    
ProductList.propTypes = {
          product: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      }
      
export default ProductList;