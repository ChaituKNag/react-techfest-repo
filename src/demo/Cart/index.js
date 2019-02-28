import React, {Component} from 'react';
import axios from 'axios';

import endPointUrl from '../../AppConsts/EndpointUrls.js';
import CartCardComponent from './CartCard';

import './index.scss';




export default class CartComponent extends Component{


    constructor(){
        super();

        this.state={
            cartList:[],
            priceList:{},
            totalDiscount:0,
            totalOrder:0,
            grandTotal:0
        }

    }
           
        updatePriceList=(prd)=>{
            console.log(prd);
            let {priceList}=this.state;
               
            priceList[prd.id]={
                price:prd.price,
                discount:prd.discount,
                quantity:prd.quantity
            }
          

            console.log(priceList);
            this.setState({priceList},
            ()=>{
                this.calcTotal(this.state.priceList);
            });

           
            
        }
        
       calcTotal=(priceList)=>{
           let  totalDiscount=0,
                totalOrder=0,
                grandTotal=0;
        for(let i in priceList){
            if(priceList.hasOwnProperty(i)){
                totalDiscount+=priceList[i].discount;
                totalOrder+=priceList[i].price;
                grandTotal+=totalOrder-totalDiscount;
            }
        }

        this.setState({
                totalDiscount,
                totalOrder,
                grandTotal
            })
       }

       checkoutOrder=()=>{

        let data={
            statusId:1,
            userId:1,
            items:[]
        };

        for(let i in this.state.priceList){

            if(this.state.priceList.hasOwnProperty(i)){
                 data.items.push({
                    quantity:this.state.priceList[i].quantity,
                    productId:i
                 })
            }
        }
        
        axios.post(endPointUrl.checkoutOrder,data)
        .then(response => {
            
            console.log(response);
            this.props.history.push('/')
            
         })
        .catch(
            error => {
                throw(error);
            }
        )
       }

    componentWillMount(){
            
        axios.get(endPointUrl.getCart.replace('$userId',1))
        .then(response => {
            console.log('response-->',response);
            let priceList={};
            response.data.map((cartProduct,index)=>{
                
                priceList[cartProduct.product.id]={
                                                        quantity:cartProduct.quantity,
                                                        price:cartProduct.product.price,
                                                        discount:cartProduct.product.discount

                                                        };
            
        });

        this.setState({
            priceList,
            cartList:[...response.data]
        }, () => {
            this.calcTotal(this.state.priceList);
        });

        console.log(priceList);
    })
        .catch(
            error => {
                throw(error);
            }
        )
    
    }

    render(){
        
        return(
            <div className="main-container">
                <main className="cart-container">
                    <div className="cart-page-title">
                        SHOPPING CART
                    </div>
                    <section className="card-shadow">
                    {
                        this.state.cartList.map((cartProd,index)=>{

                         return <CartCardComponent product={cartProd.product} key={index} getValue={this.updatePriceList}/>
                            
                        })
                    }
                    
                    </section>
                    
                    <section className="checkout-container">
                        <div className="checkout-content">
                            <div className="order-total-container">
                                <div className="sum-label">Order Total:</div>
                                <div className="sum-value">${parseFloat(this.state.totalOrder).toFixed(2)}</div>
                                </div>
                            <div className="delivery-charge-container">
                                <div className="sum-label">Discount:</div>
                                <div className="sum-value">-${parseFloat(this.state.totalDiscount).toFixed(2)}</div>
                            </div>
                            <div className="grand-total-container">
                                <div className="total">
                                    <div className="sum-label-total">Grand Total:</div>
                                    <div className="grand-sum">${parseFloat(this.state.grandTotal).toFixed(2)}</div>
                                </div>
                            </div>
                            <div className="checkout-btn-container">
                                <button className="secondary-button">CONTINUE SHOPPING</button>
                                <button className="primary-button checkout-btn" onClick={this.checkoutOrder}>PROCEED TO CHECKOUT</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}