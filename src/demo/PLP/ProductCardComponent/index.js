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

       let stars=[],
            prdName=this.props.product.name,
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
        
       for(let i=0;i<5;i++)
                stars.push(<StarComponent isMarked={(i<this.props.product.rating)?true:false} key={i}/>)
           


        return(
            <Link to={{pathname:`/pdp/${this.props.product.id}`}} >
                <div className="product">
                    {/* <span className="product-tag">Best selling</span> */}
                    <span className="product-image" style={styles.backgroundStyles}></span>
                        <div className="product-label-container">
                            <h6>{prdName}</h6>
                            <label>{tagLine}</label>
                            <div>
                               {stars}
                                </div>
                            
                            </div>
                    </div>
                  </Link>  
        )
    }
}
