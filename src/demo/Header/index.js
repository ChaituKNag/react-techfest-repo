import React, {Component} from 'react';

import './index.scss'; 
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

export default class HeaderComponent extends Component{
   
    render(){
        return(
            <div className="header-container">
                <div className="header-content"> 
                    <div className="header-left-content">
                        <a href="#ecommerce">E-Commerce</a>
                        <div className="additional-info">Platform</div>
                    </div>
                    <div className="header-middle-content">
                        <span className="search-icon"><i className="fa fa-search"></i></span>
                        <input type="text" placeholder="Search item or keyword" className="search-bar" />
                    </div>
                    <div className="header-right-content">
                        <span className="cart-icon"><i className="fa fa-shopping-cart"></i></span>
                        <span className="profile-icon"><i className="fa fa-user-circle"></i></span>
                    </div>
                </div>
            </div>
        )
    }
}
