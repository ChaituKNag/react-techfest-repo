import React, {Component} from 'react';
import axios from 'axios';

import endPointUrl from '../../AppConsts/EndpointUrls.js';
import StarComponent from '../PLP/StarComponent';

import './index.scss';

export default class PDPComponent extends Component{

    constructor(){
        super();

        this.state={
           productInfo:{}
        }
    }

    componentDidMount(){

        if(!this.props.match.params.productId){
            return;
        }
        axios.get(endPointUrl.productInfo.replace('$id',this.props.match.params.productId))
            .then(response => {
                console.log('response-->',response);
                this.setState({productInfo:response.data})
            })
            .catch(
                error => {
                    throw(error);
                }
            )

    }

    render(){
        console.log(this.props.match.params.productId);
        let stars=[];
       
        for(let i=0;i<5;i++)
        stars.push(<StarComponent isMarked={(i<(this.state.productInfo.product&&this.state.productInfo.product.rating))?true:false} key={i}/>)
        return(
            <div className="main-container">
                <main className="pdp-container">
                    <section className="image-section">
                        <div>
                            <img src={this.state.productInfo.product&&this.state.productInfo.product.imageUrl} alt=""/>
                            <div className="btn-container">
                                <button>
                                    BUY NOW
                                </button>
                            </div>
                        </div>
                    </section>
                    <section className="description-section">
                        <div className="product-name">
                        {this.state.productInfo.product&&this.state.productInfo.product.name}
                        </div>
                        <div className="product-rating">
                            {stars}
                        </div>
                        <div className="product-desc">
                        {this.state.productInfo.product&&this.state.productInfo.description}
                            {/* <ul className="dashed">
                                <li>
                                    Amazon Echo is a hands-free smart speaker that you control using your voice. It connects to Alexa – a cloud based voice service to play music, make calls, check weather and news, set alarms, control smart home devices, and much more.
                                </li>
                                <li>
                                    Echo has powerful speakers that fill the room with immersive 360° omnidirectional audio, and deliver crisp vocals and dynamic bass response.
                                </li>
                                <li>
                                    Amazon Echo is a hands-free smart speaker that you control using your voice. It connects to Alexa – a cloud based voice service to play music, make calls, check weather and news, set alarms, control smart home devices, and much more.
                                </li>
                                <li>
                                    Echo has powerful speakers that fill the room with immersive 360° omnidirectional audio, and deliver crisp vocals and dynamic bass response.
                                </li>
                                <li>
                                    Amazon Echo is a hands-free smart speaker that you control using your voice. It connects to Alexa – a cloud based voice service to play music, make calls, check weather and news, set alarms, control smart home devices, and much more.
                                </li>
                            </ul> */}
                        </div>
                        {/* <div className="product-desc specifications">
                            <div className="heading">Specifications</div>
                            <ul>
                                <li>
                                    Smooth Layout
                                </li>
                                <li>
                                    All in one space
                                </li>
                                <li>
                                    Smooth Layout
                                </li>
                                <li>
                                    All in one space
                                </li>
                                <li>
                                    Smooth Layout
                                </li>
                            </ul>
                        </div> */}
                        {/* <div className="product-desc system-requirements">
                            <div className="heading">System Requirements</div>
                            <ul>
                                <li>
                                    Smooth Layout
                                </li>
                                <li>
                                    All in one space
                                </li>
                                <li>
                                    Smooth Layout
                                </li>
                                <li>
                                    All in one space
                                </li>
                                <li>
                                    Smooth Layout
                                </li>
                            </ul>
                        </div> */}
                    </section>
                </main>
            </div>
        )
    }
}