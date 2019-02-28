import React from 'react';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";
import propTypes from 'prop-types';

const Cta = ({ className, ctaColor, ctaText, ctaType, ctaPath, onClickHandler , outlineVal }) => {
    switch(ctaType) {
        case 'link': 
            return <Link to={ctaPath} className={className}>{ctaText}</Link>;
        case 'button': 
            return <Button outline={outlineVal} color={ctaColor} onClick={onClickHandler} className={className}>{ctaText}</Button>;
        case 'submit': 
            return <Button outline={outlineVal} color={ctaColor} type={ctaType} className={className}>{ctaText}</Button>;
        default: return null;
    }
};

Cta.propTypes = {
    className: propTypes.string,
    ctaColor: propTypes.string,
    ctaText: propTypes.string.isRequired,
    ctaType: propTypes.string.isRequired,
    ctaPath: propTypes.string,
    onClickHandler: propTypes.func,
    outlineVal: propTypes.string
}

export default Cta;
