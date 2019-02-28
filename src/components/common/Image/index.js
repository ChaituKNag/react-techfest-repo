import React from 'react';
import propTypes from 'prop-types';

const Image = ({ imageSrc, imageAlt, className }) => (
    <img src={imageSrc} alt={imageAlt} className={className}/>
);

Image.propTypes = {
    imageSrc: propTypes.string,
    imageAlt: propTypes.string,
    className: propTypes.string
}

export default Image;
