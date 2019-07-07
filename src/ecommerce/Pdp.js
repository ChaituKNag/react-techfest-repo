import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Pdp extends Component {
  constructor(props){
    super(props)
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      'prodData': ''
    }
  }

  componentDidMount(){
    const productId = this.props.location.pathname.split('/')[2];

    let prodData = this.props.productData.filter(function(obj){
                                return obj.id == productId;
                              })

      if(prodData.length > 0){
        this.setState({
          'prodData' : prodData
        })
      }else{
        this.props.fetchProductDetailsById(productId);
      }
  }

  componentWillReceiveProps({productData}){
    const productId = this.props.location.pathname.split('/')[2];

    this.setState({
      "prodData": productData.filter(function(obj){
        return obj.id == productId;
      })
    });
  }

  addToCart(product){
    console.log('Product Data', product);
    this.props.addProductToBag(product);
    debugger;
  }

  render() {
    let productData = this.state.prodData;

    return (
      productData && productData.length > 0 &&
      <div className="my-3 mx-2 py-4 px-4 col-md-full d-flex" data-prod-id={productData[0].id} key={`${productData[0].id}`}>
          <img src={productData[0].product.imageUrl} alt="" className="product-detail-img"/>
          <div className="details">
            <p className="subTitle">{productData[0].product.name}</p>
            <p className="rating">{productData[0].product.rating}</p>
            <p className="rating">Category ID: {productData[0].product.category.id}</p>
            <h5 className="prodTitle mt-3">{productData[0].description}</h5>
            <Link to='/cart'>
              <button className="px-4 py-2" onClick = { (e) => this.addToCart(productData[0])} value="Add to Cart">Add to Cart</button>
            </Link>
          </div>
      </div>
    )
  }
}
