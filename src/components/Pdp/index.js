import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";

import { getProductData, addToCart } from "../../actions/PdpActions";
import Cta from "../common/Cta";
import Rating from "../common/Rating";
import Image from "../common/Image";
import ListComponent from '../common/ListComponent';

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
    if (prevProps == undefined) {
      return false;
    }

    const { match, productData } = this.props;
    if (productData.id != match.params.productId) {
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
              ctaText="Buy Now"
              ctaType="button"
              onClickHandler={this.addToCart.bind(this)}
            />
          </Col>
          <Col md={8} className="product-details-section">
            <p className="product-title">{name}</p>
            <p className="product-price">{price}</p>
            <Rating maxRating={5} avgRating={rating} className="text-warning" />
            <ListComponent listData={productDescription} className="product-description"/>
            <ListComponent listData={specifications} className="product-features" listHeader="Specifications"/>
            <ListComponent listData={systemRequirements} className="product-features" listHeader="System Requirements"/>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    productData: state.pdpData.productData
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetails);
