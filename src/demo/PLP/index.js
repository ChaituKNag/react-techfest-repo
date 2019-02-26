import React, {Component} from 'react';
import ProductCardComponent from './ProductCardComponent';
import axios from 'axios';
import endPointUrl from '../../AppConsts/EndpointUrls.js';

import './index.scss';


export default class PLPComponent extends Component{

    constructor(){
        super();
        this.state={
            productList:[]
        }
    }

    componentDidMount(){

        let plpObj = this;
        axios.get(endPointUrl.productsList)
            .then(response => {
                console.log('response-->',response);
                plpObj.setState({
                    productList: response.data
                })
            })
            .catch(
                error => {
                    throw(error);
                }
            )

    }

    render(){
        let productsList=[];
        for(let i=0; i<this.state.productList.length;i++){
            productsList.push(
                <ProductCardComponent product={this.state.productList[i]} key={i}/>)
        }

        return(
        <div>
            <div className="banner-container">
                <div className="banner-content">
                    <div className="banner-hd-1">REPUBLIC DAY SALE</div>
                    <div className="banner-hd-2">Upto 60% Off*</div>
                    <div className="banner-hd-3">Google Home and Google Home Mini</div>
                    <button type="button" className="explore-button">EXPLORE</button>
                </div>
            </div>
            {productsList}
            </div>
            )
    }
}