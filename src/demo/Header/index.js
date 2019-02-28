import React , { Component } from 'react';
import { connect } from 'react-redux';
import AutoSuggestion from '../AutoSuggestion';
import './header.css';

class Header extends Component {

   filterResults (products){
    return products.map(product => product.name);
  }

    handleNavigation(){
    this.props.history.push('/cart');
  }
  render() {
    return(
      /* <div className="nav-container">
   <div className="brand">
      Ecommerce
   </div> 
   <div className="search">
      <form action="#" method="get" className="search-form">
         <AutoSuggestion
        suggestions = {this.props.productsList}
      />
      </form>
   </div>
</div> */
<section className="header row">
<div className="header-logo col-md-3">E-Commerce
<span className="header-logo-subtext">platform</span>
</div>
<AutoSuggestion
        suggestions = {this.props.productsList}
      />
<div className="header-icons col-3">
<div className="header-icons-cart "><i className="fa fa-shopping-cart fa-lg" aria-hidden="true" onClick="{this.handleNavigation.bind(this)}"></i></div>
{/* <div className="header-icons-profile">profile</div> */}
<div class="header-icons-profile"><img class="header-icons-profile-image" alt="user"></img>
</div>
{/* <div class="header-icons-profile">Login</div> */}
</div>
</section> 
 

    );
  }
}

function mapStateToProps(state){
   return {
       productsList: state.FetchProductsReducer
   }
}

export default connect(mapStateToProps,null)(Header);