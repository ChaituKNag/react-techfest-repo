import React from 'react';

const Image = ({ imageSrc, imageAlt, className }) => (
    <img src={imageSrc} alt={imageAlt} className={className}/>
);

export default Image;
