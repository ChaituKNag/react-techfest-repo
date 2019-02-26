import React, { Component } from 'react';
import StarComponent from '../StarComponent';

import './index.scss';

export default class ProductCardComponent extends Component{

    constructor(props){
        super(props);
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
            if(i<this.props.product.rating)
                stars.push(<StarComponent isMarked={true} key={i}/>)
            else
                 stars.push(<StarComponent isMarked={false} key={i}/>)


        return(
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
        )
    }
}
