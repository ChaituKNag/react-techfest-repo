import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProductDetail } from './../../store/actions/productAction';
import { addToCart } from './../../store/actions/cartAction';
import './pdpContainer.scss';
import Rating from '../../components/common/rating/Rating';


class ProductDetailContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      detail:{}
    }
    this.add = this.add.bind(this);
  }
  

  componentDidMount() {
    window.scrollTo(0, 0);
    const id = this.props.match.params.id;
    this.props.fetchProductDetail(id);
  }

  add(item){
    this.props.addToCart(item);
  }

  checkInCart(){
    let incart = false;
    if(this.props.cart){
      for(let i=0;i<this.props.cart.length;i++){
        if(this.props.cart[i].id === this.props.detail.id){
          incart = true;
          break;
        }
      }
    }
    return incart;
  }
  

  render() {
    const product = this.props.detail;
    const detail = this.props.detail.product;
    return (
      <div className="container">
        <div className="row p-3">
        {detail && (
          <>
          <div className="preview col-3">
            <div className="preview-pic tab-content">
              <div className="tab-pane active" id="pic-1"><img src={detail.imageUrl} alt="product Loading" /></div>
            </div>
          </div>
          <div className="details col">
            <h3 className="product-title">{detail.name}</h3>
            <div className="rating">
                <Rating rated={detail.rating} outof={5} />
            </div>
            <p className="product-description">{product.description}</p>
            <h4 className="price">Price: <span className="disc-price fa fa-inr">{detail.price * (100.0 - detail.discount) / 100.0}</span>&nbsp;<span className="org-price fa fa-inr">{detail.price}</span></h4>
            {/* <h5 className="sizes">sizes:
            <span className="size" data-toggle="tooltip" title="small">1 KG</span>
            </h5> */}
            <div className="action">
                <div className="product-buynow">
                   {this.checkInCart()?(<button className='btn btn-secondary' disabled="true">Added in Cart</button>):(<button className='btn btn-primary' onClick={()=>this.add(detail)} >Add to cart</button>)}
                </div>
            </div>
          </div>
          </>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  detail: state.product.detail,
  cart: state.cart.cart
})

ProductDetailContainer.propTypes = {
  fetchProductDetail: PropTypes.func.isRequired,
  detail: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { fetchProductDetail,addToCart })(ProductDetailContainer);
