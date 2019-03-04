import React, { Component } from 'react';
import Categories from './Categories';
import Pagination from './Pagination';
import Product from './Product';

export class ProductList extends Component {
  constructor(props){
    super(props);
    let isCategoryFiltered = false;
    let pageSize = 5;
    let isPageLinkClicked = false;

    this.state = {
      'prodList': [],
      'filteredProdList': [],
      'paginatedProdList': [],
      'isCategoryFiltered': false
    } 

    this.filterProductsByCategory = this.filterProductsByCategory.bind(this);
    this.renderPageResults = this.renderPageResults.bind(this);
    this.clearAllFilters = this.clearAllFilters.bind(this);
  }

  //this method filters the products by category and pageSize and renders the products
  filterProductsByCategory(categoryObj){
    this.setState({isCategoryFiltered : true});

    //update the products result set
    let filteredProductList = this.state.prodList.filter(function(product){
	    return product.category.id === categoryObj.id;
    });

    this.setState({
      "filteredProdList": filteredProductList,
      "isCategoryFiltered": true,
      "paginatedProdList": filteredProductList.slice(0, 5)
    });
  }

  //this method updates the product results based on the Pagination link clicked 
  renderPageResults(pageNumber, pageSize){
    let startIndex = pageNumber * parseInt(pageSize),
        endIndex = startIndex + parseInt(pageSize),
        currentProducts = this.state.filteredProdList;

        this.setState({
          "paginatedProdList": currentProducts.slice(startIndex, endIndex)
        });
  }

  //this method clears all the filters on categories and refreshes the page with all the products
  clearAllFilters(){
    alert('clearAllFilters');
  }

  componentDidMount(){
    this.props.fetchProducts();
    this.props.fetchCategories();
  }

  componentWillReceiveProps({products}){
    this.setState({
      "prodList": products[0]
    });
  }

  render() {
    let products = (this.state && this.state.isCategoryFiltered && this.state.isCategoryFiltered === true) ? this.state.paginatedProdList : this.state.prodList;

    return (
      <React.Fragment>
        <div className="container d-flex py-3">
        <Categories categories={this.props.categories} filterProductsByCategory = {this.filterProductsByCategory}></Categories>
        <div className="col-sm-9 row">
          {
            products && products.length > 0 && products.map((dataItem, index) => {
              return(
                <Product dataItem={dataItem} key={index}></Product>
              )
            })
          }
        </div>
      </div>

      <Pagination totalRecords={this.state && this.state.filteredProdList.length} pageSize='5' renderPageResults = {this.renderPageResults} clearAllFilters = {this.clearAllFilters} isPageLinkClicked="false"></Pagination>
      </React.Fragment>
    )
  }
}