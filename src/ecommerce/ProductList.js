import React, { Component } from 'react';

export class ProductList extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchProducts();
  }

  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
          
          </div>
        </div>

      </React.Fragment>
    )
  }
}