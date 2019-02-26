import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from 'reactstrap';

import { CardComponent } from "../common";
import { getProductsList } from "../../actions/PlpActions";
import GridComponent from "../common/GridComponent";

class ProductsList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getProductsList());
  }
  render() {
    const productsList = this.props.productsList || [];
    return (
      <Container>
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
