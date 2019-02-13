import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ message }) => (
    <div>
        <h3>{`Our superhero said: ${message}`}</h3>
    </div>
);

Hero.propTypes = {
    message: PropTypes.string
}

export default Hero;