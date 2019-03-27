import React from 'react';
import { connect }  from 'react-redux';
import logo from '../assets/logo_header.png';
import {Link, withRouter} from 'react-router-dom';
import { fetchProductsInBag, fetchProductsOnSearchTerm} from '../store/actions';


//redux - start

const mapStateToProps = (state, ownProps) => {
    return ({
        productData : state.productData
    })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchProductsInBag: () => {
        dispatch(fetchProductsInBag());
    },

    fetchProductsOnSearchTerm: (searchTerm) => {
        dispatch(fetchProductsOnSearchTerm(searchTerm));
    }
})

//redux - end

//header component - start

class Header extends React.Component{
    constructor(props){
        super(props);
        this.navigateToCart = this.navigateToCart.bind(this);

        this.state = {
            'cartCount': 0
        }
    }

    navigateToCart(){
        this.props.history.push('/cart');
    }

    componentDidMount(){
        this.props.fetchProductsInBag();
    }

    componentWillReceiveProps(productData){
        let productList = productData.productData;
        let activeCart = productList.filter(function(product){
            return product.isAddedToBag === true;
        });
        
        this.setState({'cartCount': activeCart.length < 0 ? 0 : activeCart.length});
    }

    render(){
        return(
            <nav>
                {
                    <div className="navbar custom-bg-color">
                        <Link to="/">
                            <img src={logo} alt="logo" className="logo"/>
                        </Link>

                        <div className="main">
                            <div className="form-group has-search">
                                {/* <span className="fa fa-search form-control-feedback"></span> */}
                                <input type="text" className="form-control" placeholder="Search" onChange = {(e) => {
                                    if(e.target.value.length > 5){
                                        this.props.fetchProductsOnSearchTerm(e.target.value)
                                    }
                                }
                                }/>
                            </div>
                        </div>

                        <a href="javascript:void(0)" className="col-md-3" onClick={(e) => this.navigateToCart()}>
                            <i className="fas fa-shopping-cart cart-count" data-count={this.state.cartCount}></i>
                        </a>
                        <div>
                        <i className="far fa-user-circle"></i>
                        </div>
                    </div>
                }
            </nav>
        )
    }
}

//header component - end

// export default withRouter(Header);

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header));