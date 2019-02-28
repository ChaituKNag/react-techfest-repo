import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOrderTotal , deleteItemFromCart} from '../../store/actions';
import StarRatings from 'react-star-ratings';
import './cart.css';

class CartItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      price: 1,
      quantityPrice: this.props.product.price
    }
  }

  
  updateTotalPrice(){
     this.props.fetchOrderTotal(this.state.quantityPrice);
  }

  componentDidMount() {
    this.updateTotalPrice();
  }

  deleteCartItem(id){
    this.props.deleteItemFromCart(id);
  }

  handlePrice(evt) {
    this.setState({
      price: evt.target.value,
      quantityPrice: evt.target.value*this.props.product.price
    });
    this.updateTotalPrice();
  }
   render() {
     return(
       <div className="container">
         <div className=" category-cart row">
            <div className="col-md-3 cart-image">
               <img src={this.props.product.imageUrl}></img>
            </div>
            <div className="col-md-6">
              <div className="row">
                 <div className="col-md-12">
                   <b>{this.props.product.name}</b>
                 </div>
              </div>
              <div className="row">
                <div className="col-md-12 cart-rating">
                 <StarRatings
                  rating={ this.props.product.rating }
                  starRatedColor="gold"
                  numberOfStars={5}
                  starDimension="25px"
                  name='rating'
                />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <input type="number" value={ this.state.price } onChange= {this.handlePrice.bind(this) }/> X <b>${this.props.product.price} = ${ this.state.quantityPrice }</b>
                </div>
              </div>
            </div>
            <div className="col-md-3" >
            <a href="#" onClick={this.deleteCartItem.bind(this,this.props.product.id)}>delete</a>
            </div>
         </div>
       </div>
     );
   }
}

export default connect(null , { fetchOrderTotal , deleteItemFromCart})(CartItem);