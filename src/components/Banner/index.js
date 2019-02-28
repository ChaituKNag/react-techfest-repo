import React from 'react';
import './index.scss';

import { Row, Col } from 'reactstrap';
import Image from '../common/Image';
import Cta from '../common/Cta';
import propTypes from 'prop-types';


const Banner = ({ bannerImage, className, headingTitle, headingDesc, subHeading, ctaPath, ctaText }) => {
    return (
        <section className="home-banner">
            <Row>
                <Col>
                    <Image imageSrc={bannerImage} imageAlt="banner" className={`img-fluid ${className}`}></Image>
                    <div className="banner-container">
                        <p className="banner-heading">{headingTitle} <br></br> {headingDesc}<sup>*</sup></p>
                        <p className="banner-subheading">{subHeading}</p>
                        <Cta ctaType="link" ctaPath={ctaPath} ctaText={ctaText} className="btn btn-warning explore"></Cta>
                    </div>
                </Col>
            </Row>
        </section>
    )
};

Banner.propTypes = {
    bannerImage: propTypes.string
}

export default Banner;
