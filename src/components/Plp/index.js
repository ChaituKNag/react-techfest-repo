import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from 'reactstrap';

import { getProductsList } from "../../actions/PlpActions";
import GridComponent from "../common/GridComponent";
import Banner from "../Banner";

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
        <GridComponent productsList={productsList}></GridComponent> 
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
