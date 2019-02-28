import React , { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts , fetchOrderTotal } from '../../store/actions';
import ProductItem from '../ProductItem';
import CartPage from '../CartPage';
import Categories from '../categories';
import ListGridToggle from '../ListGridToggle';
import Pagination from "react-js-pagination";
import logo from '../../images/header.png'
import './plp.css';

class PlpPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      productsList : this.props.productsList,
      activePage:1,
      hasMore:true,
      count:10
    }
  }

  componentWillMount() {
    this.props.fetchProducts().then(()=>{
    //  this.handlePageChange(1);
    });
    this.props.fetchOrderTotal();
  }

  componentWillReceiveProps(nextprops) {

     this.setState({
        productsList: nextprops.productsList ? nextprops.productsList : [],
        pageNo: 1,
        hasMore: true
      })
  }

  renderProducts(){
    return (
       <div className="row">
        <div className="row plp-container">
        <img className="plp-container-image" src={logo}/>
        </div> 
 

        <ListGridToggle/>
          {this.state.productsList.length ? this.state.productsList.slice(0,this.state.count).map((product,idx) =>{
              return <ProductItem key={product.id} product={product}/>
          }): this.renderProduct()
          }
       </div>
    );
  }

  increment() {
    this.setState({
      count: this.state.count + 10
    });
  };

  renderMoreProducts() {
    this.increment();

    return (
      <div>
        this.renderProducts();
    </div>
    );
  }

  renderProduct(){
    return (
      <div className="row">
        {this.state.productsList.id ? <ProductItem key={this.state.productsList.id} product={this.state.productsList}/> : ''}
      </div>
    );
  }

  render() {

    let button;
    if (this.state.count < this.state.productsList.length) {
      button = <button className="button btn btn-info product-cta"
                onClick={this.renderMoreProducts.bind(this)}>Load More</button>
    }
    
    return(
      <div className="container product-wrapper">
      <Categories/>
      <div className="col-md-8 col-md-offset-1">
         { this.renderProducts()}
         { button }
               
               
      </div>
       <div>  
      {/*<hr/>
         Total :  { this.props.totalPrice }
         */}
       </div>
         {/* <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={5}
          totalItemsCount={this.state.productsList.length}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
       */ }
      </div>
   
    );
  }
}

 function mapStateToProps(state){
    return {
      productsList: Object.assign([],state.FetchProductsReducer),
      totalPrice : state.FetchOrderTotalReducer
    }
 }


export default connect(mapStateToProps,{ fetchProducts , fetchOrderTotal })(PlpPage);