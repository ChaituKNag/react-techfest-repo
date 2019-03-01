import React, { Component } from 'react';
import Categories from './Categories';

export class ProductList extends Component {
  constructor(props){
    super(props);
    let isCategoryFiltered = false;

    this.filterProductsByCategory = this.filterProductsByCategory.bind(this);

    this.setState({
      "isCategoryFiltered": isCategoryFiltered
    });

  }

  filterProductsByCategory(categoryObj){
    alert('filterProductsByCategory', categoryObj);
    //id;name;parent
    this.setState({isCategoryFiltered : true});

    //update the products result set
    let filteredProductList = this.props.products[0].filter(function(product){
	    return product.category.id === categoryObj.id;
    });

    console.log('filteredProductList', filteredProductList);

    this.setState({
      "filteredProdList": filteredProductList,
      "isCategoryFiltered": true
    });


    //update the pagination component
  }

  componentDidMount(){
    this.props.fetchProducts();
    this.props.fetchCategories();
    debugger;
  }

  render() {
    let products = (this.state && this.state.isCategoryFiltered && this.state.isCategoryFiltered === true)? this.state.filteredProdList :this.props.products[0];

    return (
      // <React.Fragment>
        <div className="py-3">
          <div className="container d-flex">
            <Categories categories={this.props.categories} filterProductsByCategory = {this.filterProductsByCategory}></Categories>
            {/* <h2 className="title">PRODUCTS</h2> */}
            <div className="col-sm-9 row">
            {
              products && products.length > 0 && products.map((dataItem) => {
                return(
                  <div className="product my-3 mx-2 py-4 px-4 col-md-3" data-prod-id={dataItem.id} key='{dataItem.id}'>
                    <img src={dataItem.imageUrl} alt="" className="prod-image"/>
                    <h5 className="prodTitle mt-3">{dataItem.name}</h5>
                    <p className="subTitle">{dataItem.category.name}</p>
                    <p className="rating">{dataItem.rating}</p>
                    <p className="rating">Category ID: {dataItem.category.id}</p>
                  </div>
                )
              })
            }
            </div>
          </div>
        </div>

      // </React.Fragment>
    )
  }
}