import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from 'reactstrap';

import { getProductsList } from "../../actions/PlpActions";
import GridComponent from "../common/GridComponent";
import Banner from "../Banner";
import Accordion from "../common/Accordion";

class ProductsList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getProductsList());
  }
  render() {
    const productsList = this.props.productsList || [];
    return (
      <Container>
        <Banner></Banner>
        <Row>
          <Col md={3}>
            <Accordion></Accordion>
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
    productsList: state.plpData.productsList
  };
};

export default connect(mapStateToProps)(ProductsList);
