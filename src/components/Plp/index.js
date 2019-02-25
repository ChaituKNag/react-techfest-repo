import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

import { CardComponent } from "../common";

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsList: []
    };
  }
  componentDidMount() {
    const homeObj = this;
    axios
      .get("http://localhost:4567/api/product")
      .then(response => {
        homeObj.setState({
          productsList: response.data
        });
      })
      .catch(error => {
        throw error;
      });
  }
  render() {
    return (
      <div>
        <h2>Home</h2>
        {this.state.productsList && (
          <div>
            <h2>Products Listed</h2>
            {this.state.productsList.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <CardComponent {...product} />
            </Link>
            ))}
          </div>
        )}
        {!this.state.productsList.length && <p>Loading productsList...</p>}
      </div>
    );
  }
}

export default ProductsList;
