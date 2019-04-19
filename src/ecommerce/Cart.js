import React, { Component } from 'react'

export default class Cart extends Component {
  constructor(props){
    super(props);

    this.deleteProdFromBag = this.deleteProdFromBag.bind(this);
    this.orderTotal = this.orderTotal.bind(this);
    this.updateTotal = this.updateTotal.bind(this);
    this.ot = 0;

    this.state = {
      'qty': 1,
      'orderTotal': 0
    }
  }

  deleteProdFromBag(product) {
    this.props.deleteProdFromBag(product);
  }

  orderTotal(): Number{
    let productsInBag = this.props.productData, orderTotal = 0;

    productsInBag.map((product) => {
      if(product.isAddedToBag ){
        orderTotal = orderTotal + parseInt(product.product.price);
      }
    });

    orderTotal && this.setState({'orderTotal': orderTotal});

    return orderTotal;
  }

  updateTotal(e, product): Number{
    this.setState({'qty': e.target.value });
    this.ot = this.ot + parseInt(this.state.qty)* parseInt(product.product.price);
  }

  render() {
    let productsInBag = this.props.productData;

    console.log('productsInBag', productsInBag);


    productsInBag.map((product) => {
      if(product.isAddedToBag ){
        this.ot = this.ot + parseInt(product.product.price);
      }
    });

    return (
      <div className="shopping-bag my-3 mx-2 py-4 px-4 col-md-full">
      {
        productsInBag && productsInBag.length > 0 && productsInBag.map((product) => {
          return(
            product.isAddedToBag &&
            <div className="d-flex pt-2 pb-2" data-prod-id={product.id} key={`${product.id}`}>
                <img src={product.product.imageUrl} alt="" className="cart-img mr-5"/>
                <div className="details">
                  <p className="subTitle">{product.product.name}</p>
                  <p className="rating">{product.product.rating}</p>
                  <p className="rating">Category ID: {product.product.category.id}</p>
                  <input type="text" className="qty" placeholder="1* qty" onChange = {(e) => this.updateTotal(e, product)}/> * <span className="price">{product.product.price}</span> = <span className="total-price">{this.state.qty* product.product.price}</span>
                </div>
                <div className="user-actions">
                    <button className="delete-prod ml-5" onClick = {(e) => this.deleteProdFromBag(product)}>Delete Item</button>
                    <button className="save-for-later ml-5">Save for Later</button>
                </div>
            </div>
          )
        })
      }

      <p>Order Total:<span className="order-total" data-order-total={this.ot}>{this.ot}</span></p>

      <button className="proceed-to-checkout">Proceed to checkout</button>
      <button className="continue-shopping ml-5">Continue Shopping</button>
      </div>
    )
  }
}
