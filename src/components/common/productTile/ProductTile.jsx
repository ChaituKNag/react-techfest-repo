import React, { Component } from 'react';
import './ProductTile.scss';
import Rating from '../rating/Rating';
import PropTypes from 'prop-types';

class ProductTile extends Component {

  navigateToDetail(){
    this.props.history.push('/product/'+this.props.product.id);
  }

  render() {
    return (
      <div className="card h-100" onClick={this.navigateToDetail.bind(this)}>
        <article className="">
          {
            this.props.product.discount>=20?(<div className="best-seller">Best Selling</div>):''
          }
          <div className="slds-card__body slds-card__body_inner">
            <img src={this.props.product.imageUrl} className="card-img-top" alt="Prodcut Loading"/>
            <h4 className="card-title">{this.props.product.name}</h4>
            <p className="sub-tag">{this.props.product.category.name}</p>
            <div>
              <span className="disc-rate">
                <i className="fa fa-inr"></i>{this.props.product.price * (100.0 - this.props.product.discount) / 100.0}
              </span>
              <span className="org-rate pl-2">
              <i className="fa fa-inr"></i>{this.props.product.price}
              </span>
            </div>
            <div>
              <span>
                <Rating rated={this.props.product.rating} outof={5} />
              </span>
              <span className="text-muted">&nbsp; (134)</span>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

ProductTile.propTypes = {
  product: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default ProductTile;