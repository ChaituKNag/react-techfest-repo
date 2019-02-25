import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { CardComponent } from "../common";
import { getProductsList } from "../../actions/PlpActions";

class ProductsList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getProductsList());
  }
  render() {
    const productsList = this.props.productsList || [];
    return (
      <div>
        {productsList.length > 0 ?  productsList.map(product => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <CardComponent {...product} />
          </Link>
        )) : <p>Loading productsList...</p> }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productsList: state.plpData.productsList
  };
};

export default connect(mapStateToProps)(ProductsList);
