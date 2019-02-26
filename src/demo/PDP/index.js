import React, {Component} from 'react';

import './index.scss';

export default class PDPComponent extends Component{

    render(){
        return(
            <div className="main-container">
                <main className="pdp-container">
                    <section className="image-section">
                        <div>
                            <img src="https://via.placeholder.com/250" alt=""/>
                            <div className="btn-container">
                                <button>
                                    BUY NOW
                                </button>
                            </div>
                        </div>
                    </section>
                    <section className="description-section">
                        <div className="product-name">
                            Amazon Echo - Smart speaker with Alexa | Powered by Dolby – White
                        </div>
                        <div className="product-rating">
                            (134)
                        </div>
                        <div className="product-desc">
                            <ul className="dashed">
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
                            </ul>
                        </div>
                        <div className="product-desc specifications">
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
                        </div>
                        <div className="product-desc system-requirements">
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
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}