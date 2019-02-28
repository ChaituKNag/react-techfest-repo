import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from 'reactstrap';

import { getProductsList } from "../../actions/PlpActions";
import GridComponent from "../common/GridComponent";
import Banner from "../Banner";
import Categories from "../Categories";
import propTypes from 'prop-types';

class ProductsList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getProductsList());
  }
  render() {
    const productsList = this.props.filteredProducts || [];
    return (
      <Container>
        <Banner bannerImage="./assets/banner.png" className="banner-img" headingTitle="Republic day sale" headingDesc=" Upto 60% Off" subHeading="Google Home and Google Home mini" ctaPath="/product/6" ctaText="Explore"></Banner>
        <Row>
          <Col md={3}>
            <Categories></Categories>
          </Col>
          <Col md={9}>
            <GridComponent productsList={productsList}></GridComponent> 
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    productsList: state.plpData.productsList,
    filteredProducts: state.plpData.filteredProducts
  };
};

ProductsList.propTypes = {
  productsList: propTypes.array,
  filteredProducts: propTypes.array
}

export default connect(mapStateToProps)(ProductsList);
