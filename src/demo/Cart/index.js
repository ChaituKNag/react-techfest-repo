import React, {Component} from 'react';

import './index.scss';

export default class CartComponent extends Component{
    render(){
        return(
            <div className="main-container">
                <main className="cart-container">
                    <div className="cart-page-title">
                        SHOPPING CART
                    </div>
                    <section className="item-section">
                        <div className="cart-item-cards">
                            <div>
                                <img src="https://via.placeholder.com/120" alt=""/>
                            </div>
                            <div className="card-contents">
                                <div className="header">
                                    <div className="product-name">
                                        Amazon Echo - Smart speaker with Alexa | Powered by Dolby – White
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
                                    RATINGS
                                </div>
                                <div className="quantity-section">
                                    <input type="number" placeholder="QUANTITY"/> x <span>$124.00 = $124.00</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="checkout-container">
                        <div className="checkout-content">
                            <div className="order-total-container">
                                <div className="sum-label">Order Total:</div>
                                <div className="sum-value">$73,090.00</div>
                                </div>
                            <div className="delivery-charge-container">
                                <div className="sum-label">Delivery Charges:</div>
                                <div className="sum-value">$320.00</div>
                            </div>
                            <div className="grand-total-container">
                                <div className="total">
                                    <div className="sum-label-total">Grand Total:</div>
                                    <div className="grand-sum">$79,329.00</div>
                                </div>
                            </div>
                            <div className="checkout-btn-container">
                                <button className="secondary-button">CONTINUE SHOPPING</button>
                                <button className="primary-button checkout-btn">PROCEED TO CHECKOUT</button>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}