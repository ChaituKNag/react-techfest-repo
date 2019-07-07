import React, { Component } from 'react';
import Categories from './Categories';
import Pagination from './Pagination';
import Product from './Product';

export class ProductList extends Component {
  constructor(props){
    super(props);

    this.state = {
      'prodList': [],
      'filteredProdList': [],
      'paginatedProdList': [],
      'isCategoryFiltered': false,
      "rerenderPagination": "true",
      "isPaginated": false
    } 

    this.filterProductsByCategory = this.filterProductsByCategory.bind(this);
    this.renderPageResults = this.renderPageResults.bind(this);
    this.clearAllFilters = this.clearAllFilters.bind(this);
  }

  //this method filters the products by category and pageSize and renders the products
  filterProductsByCategory(categoryObj){
    //update the products result set
    let filteredProductList = this.state.prodList.filter(function(product){
      return product.category.id === categoryObj.id;
    });

    this.setState({
      "filteredProdList": filteredProductList,
      "isCategoryFiltered": true,
      "paginatedProdList": filteredProductList.slice(0, 5),
      "rerenderPagination": "true"
    });
  }

  //this method updates the product results based on the Pagination link clicked 
  renderPageResults(pageNumber, pageSize){
    let startIndex = pageNumber * parseInt(pageSize),
        endIndex = startIndex + parseInt(pageSize),
        filteredProdList = this.state.filteredProdList,
        currentProducts = filteredProdList.length <= 0 ? this.state.prodList : filteredProdList;

        this.setState({
          "isCategoryFiltered": filteredProdList.length <= 0 ? false : true,
          "filteredProdList": filteredProdList,
          "paginatedProdList": currentProducts.slice(startIndex, endIndex),
          "rerenderPagination" : "false",
          "isPaginated": true
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
    let products ;
    let paginationLinks ;
    let searchedProdList = this.state && this.state.prodList && this.state.prodList.filter(prod => {
      return prod.isSearched === true;
    });

    

    if(this.state && this.state.isCategoryFiltered){ // on category change
      products = this.state.paginatedProdList;
      paginationLinks = this.state.filteredProdList.length;
    }else if (this.state && this.state.isPaginated){ // on pagination links click
      products = this.state.paginatedProdList;
      paginationLinks = this.state.filteredProdList.length <= 0 ? this.state && this.state.prodList.length : this.state.filteredProdList.length;
    }else if(searchedProdList && searchedProdList.length > 0){
      products = searchedProdList;
      paginationLinks = searchedProdList.length;
    }
    else {// on load scenario
      products = this.state && this.state.prodList && this.state.prodList.slice(0,5);
      paginationLinks = this.state && this.state.prodList && this.state.prodList.length;
    }

    return (
      <React.Fragment>
        <div className="container d-flex py-3">
        <Categories categories={this.props.categories} filterProductsByCategory = {this.filterProductsByCategory}></Categories>
        <div className="col-sm-9 row">
          {
            products && products.length > 0 && products.map((dataItem, index) => {
              return(
                <Product dataItem={dataItem} key={index} redirectToPdp={this.redirectToPdp}></Product>
              )
            })
          }
        </div>
      </div>

      <Pagination totalRecords={paginationLinks} pageSize='5' renderPageResults = {this.renderPageResults} clearAllFilters = {this.clearAllFilters} rerenderPagination={this.state.rerenderPagination}></Pagination>
      </React.Fragment>
    )
  }
}
