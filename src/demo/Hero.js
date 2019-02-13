import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ message }) => (
    <div>
        <h3>Our superhero said</h3>
        <p style={{fontSize: '48px'}}>{message}</p>
    </div>
);

Hero.propTypes = {
    message: PropTypes.string
}

export default Hero;