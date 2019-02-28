import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { fetchProductById , addProductItemToCart , addProductDetailsToCart } from '../../store/actions';
import './pdp.css';

class PdpPage extends Component {

  componentDidMount() {
    this.props.fetchProductById(this.props.match.params.id);
  }

  handleNavigation(){
    this.props.history.push('/cart');
  }

  addToCart(){
    let data = {
      "userId": 1,
      "productId": this.props.productDetails.id,
      "quantity": 1
    }
     this.props.addProductItemToCart(data).then(()=>{
       if(this.props.cartDetails){
          this.props.addProductDetailsToCart(this.props.productDetails);
          this.handleNavigation();
       }
    });
     
  }

  render() {
    return(
      <div className="container"> 
        <div className="row">
          <div className="col-md-4">
            <div className="pdp-image">
              <img src={this.props.productDetails.product ? this.props.productDetails.product.imageUrl:''} alt="details"></img>
            </div>
            <div>
              <button className="button btn btn-info product-cta"
                onClick={this.addToCart.bind(this)}
              >BUY NOW</button>
            </div>
          </div>
         
          <div className="col-md-8">
           <div className="product-header">
              {this.props.productDetails.product ? this.props.productDetails.product.name :''}
              <div>
                 <StarRatings
                  rating={ this.props.productDetails.product ? this.props.productDetails.product.rating: 0 }
                  starRatedColor="gold"
                  numberOfStars={5}
                  name='rating'
                />
              </div>
           </div>
           <div className="product-description">
             {this.props.productDetails.description}
          </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    productDetails: state.FetchProductReducer,
    cartDetails: state.CartReducer
  }
}


export default connect(mapStateToProps , { fetchProductById , addProductItemToCart , addProductDetailsToCart })(withRouter(PdpPage));