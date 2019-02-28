import React, {Component} from 'react';
import axios from 'axios';

import endPointUrl from '../../AppConsts/EndpointUrls.js';

import './index.scss'; 
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

export default class HeaderComponent extends Component{

    constructor(){
        super();
        this.state={
            userImage:''
        }
    }

    componentDidMount(){

        axios.get(endPointUrl.getUser.replace('$userId',1))
            .then(response => {
                console.log('response-->',response);
                this.setState({
                    userImage:response.data.profileImageUrl
                })
            })
            .catch(
                error => {
                    throw(error);
                }
            )
    }
   
    render(){
        return(
            <div className="header-container">
                <div className="header-content"> 
                    <div className="header-left-content">
                        <a href="/">E-Commerce</a>
                        <div className="additional-info">Platform</div>
                    </div>
                    <div className="header-middle-content">
                        <span className="search-icon"><i className="fa fa-search"></i></span>
                        <input type="text" placeholder="Search item or keyword" className="search-bar" />
                    </div>
                    <div className="header-right-content">
                        <a href="/cart" className="cart-icon"><i className="fa fa-shopping-cart"></i></a>
                        <img className="profile-image" src={this.state.userImage}/>
                    </div>
                </div>
            </div>
        )
    }
}
