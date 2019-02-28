import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from 'reactstrap';
import propTypes from 'prop-types';

import { getProductsList, updatePaginationResults } from "../../actions/PlpActions";
import Pagination from '../common/Pagination';
import GridComponent from "../common/GridComponent";
import Banner from "../Banner";
import Categories from "../Categories";

class ProductsList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getProductsList());
    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageData) {
    if(this.props) {
      const { dispatch } = this.props;
      dispatch(updatePaginationResults(pageData));
    }
  }

  render() {
    const { filteredProducts, paginationData } = this.props;
    return (
      <Container>
        <Banner bannerImage="./assets/banner.png" className="banner-img" headingTitle="Republic day sale" headingDesc=" Upto 60% Off" subHeading="Google Home and Google Home mini" ctaPath="/product/6" ctaText="Explore"></Banner>
        <Row>
          <Col md={3}>
            <Categories />
          </Col>
          <Col md={9}>
            <GridComponent productsList={paginationData}></GridComponent>
            {filteredProducts.length > 12 ? 
              <Row>
                <Col md={12}>
                  <Pagination paginationData={filteredProducts} onChangePage={this.onChangePage} />
                </Col>
              </Row>
            : null} 
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    productsList: state.plpData.productsList,
    filteredProducts: state.plpData.filteredProducts,
    paginationData: state.plpData.paginationData
  };
};

ProductsList.propTypes = {
  productsList: propTypes.array,
  filteredProducts: propTypes.array,
  paginationData: propTypes.array,
  dispatch: propTypes.func
}

export default connect(mapStateToProps)(ProductsList);
