import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";

import { getProductData, addToCart } from "../../actions/PdpActions";
import Cta from "../common/Cta";
import Rating from "../common/Rating";
import Image from "../common/Image";
import ListComponent from '../common/ListComponent';
import Price from '../common/Price';
import propTypes from 'prop-types';

import './pdp.scss';

class ProductDetails extends Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.getProductData(match.params.productId);
  }

  componentDidUpdate(prevProps) {
    /**
     * this is the initial render
     * without a previous prop change
     */
    if (prevProps === undefined) {
      return false;
    }

    const { match, productData } = this.props;
    if (productData.id !== match.params.productId) {
      this.props.getProductData(match.params.productId);
    }
  }

  addToCart() {
    this.props.addProductToCart(this.props.productData);
  }

  render() {
    const { imageUrl, name, price, rating, specifications, systemRequirements, productDescription } = this.props.productData;
    return (
      <Container className="product-details">
        <Row>
          <Col md={4} className="product-image-section">
            <Image imageSrc={imageUrl} imageAlt={name} className="product-image"/>
            <Cta
              className="product-add-cart"
              ctaColor="warning"
              ctaText="BUY NOW"
              ctaType="button"
              onClickHandler={this.addToCart.bind(this)}
            />
          </Col>
          <Col md={8} className="product-details-section">
            <p className="product-title">{name}</p>
            <p className="product-price"><Price price={price} currency="$"></Price></p>
            <Rating maxRating={5} avgRating={rating} className="text-warning" />
            <ListComponent listData={productDescription} className="product-description"/>
            <ListComponent listData={specifications} className="product-features" listHeader="Specifications"/>
            <ListComponent listData={systemRequirements} className="product-features" listHeader="System Requirements"/>
            {this.props.addTocartStatus !== null && 
              <div className="status-message">
                <span>{this.props.addTocartStatus ? 'Product has been added to your bag' : 'Product cannot be added to cart' }</span>
              </div> 
            }
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    productData: state.pdpData.productData,
    addTocartStatus: state.cart.status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProductData: id => {
      dispatch(getProductData(id));
    },
    addProductToCart: productData => {
      dispatch(addToCart(productData));
    }
  };
};

ProductDetails.propTypes = {
  imageUrl: propTypes.string,
  name: propTypes.string,
  price: propTypes.number,
  rating: propTypes.number,
  specifications: propTypes.array,
  systemRequirements: propTypes.array,
  productDescription: propTypes.array,
  getProductData: propTypes.func,
  addProductToCart: propTypes.func,
  dispatch: propTypes.func,
  match: propTypes.object,
  addToCart: propTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
