import React,{Component} from 'react';

import StarComponent from '../../PLP/StarComponent';

import './index.scss';

export default class CartCardComponent extends Component{

    constructor(){
        super();

        this.state= {
            quantity:1,
        }

        this.changeInQuantity=(e)=>{

            let tValue = e.target.value;

           if(tValue===''){

            this.setState(
                {
                    quantity:tValue
                }
            )
            return;

           }
            
          
            if((/^[0-9]+$/.test(tValue))&&tValue<=this.props.product.inStock){
                    this.setState(
                        {
                            quantity:tValue
                        }
                    )
            }
        }

        this.validateAndResetQty =(e)=>{
            let tValue = e.target.value;
            if(tValue==''||tValue==0){
                    this.setState(
                        {quantity:1}
                    )
            } 
            
            this.props.getValue({
                id:this.props.product.id,
                price:(this.state.quantity)*parseInt(this.props.product.price,10),
                discount:(this.state.quantity)*parseInt(this.props.product.discount,10),
                quantity:parseInt(this.state.quantity,10)
            });
        }
    }

    render(){

        let price=(this.state.quantity||0)*parseInt(this.props.product.price,10);

        return(
            <div className="cart-item-cards">
                <div className="image-container">
                    <img src={this.props.product.imageUrl} alt=""/>
                </div>
                <div className="card-contents">
                    <div className="header">
                        <div className="product-name">
                        {this.props.product.name}
                        </div>
                        <div className="product-actions">
                            <ul>
                                <li>
                                    Delete Item
                                </li>
                                <li>
                                    Save for Later
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="ratings-section">
                        <StarComponent rating={this.props.product.rating}/>
                    </div>
                    <div className="quantity-section">
                        <input type="text" value={this.state.quantity} onBlur={this.validateAndResetQty} onChange={this.changeInQuantity}  placeholder="Qty"/> x <span>${this.props.product.price} = ${price}</span>
                    </div>
                </div>
            </div>
        )
    }
}


