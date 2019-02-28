import React from 'react';
import './index.scss';

import { Row, Col } from 'reactstrap';
import Image from '../common/Image';
import Cta from '../common/Cta';


const Banner = ({ bannerImage }) => {
    return (
        <section className="home-banner">
            <Row>
                <Col>
                    <Image imageSrc={bannerImage} imageAlt="banner" className="img-fluid banner-img"></Image>
                    <div className="banner-container">
                        <p className="banner-heading">Republic day sale <br></br> Upto 60% Off<sup>*</sup></p>
                        <p className="banner-subheading">Google Home and Google Home mini</p>
                        <Cta ctaType="link" ctaPath="/" ctaText="Explore" className="btn btn-warning explore"></Cta>
                    </div>
                </Col>
            </Row>
        </section>
    )
};

export default Banner;
