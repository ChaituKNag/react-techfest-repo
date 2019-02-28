import React, { Component } from 'react';
import {Link} from "react-router-dom";
import StarComponent from '../StarComponent';

import './index.scss';

export default class ProductCardComponent extends Component{

    constructor(props){
        super(props);

        // this.navigateToPDP=(product)=>{
        //     history.push({
        //         pathName:'/pdp',
        //         state:{product}
        //     })
        // }
    }

    render(){

       
        let prdName=this.props.product.name,
            tagLine=this.props.product.category.name,
            url= `url(${this.props.product.imageUrl})`,
            styles={
                backgroundStyles:{
                    backgroundImage:url,
                    backgroundRepeat:'no-repeat',
                    backgroundPosition:'center',
                    backgroundSize:'contain',
                }
            };
        

        return(
            <Link to={{pathname:`/pdp/${this.props.product.id}`}} >
                <div className="product card-shadow" title={prdName}>
                    <div className="product-image" style={styles.backgroundStyles}></div>
                    <div className="product-label-container">
                        <h6>{prdName}</h6>
                        <label>{tagLine}</label>
                        <div className="star-rating">
                            <StarComponent rating={this.props.product.rating}/>
                        </div>
                    </div>
                </div>
            </Link>  
        )
    }
}
