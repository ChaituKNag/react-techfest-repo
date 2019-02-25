import React from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Cta = ({ ctaColor, ctaText, ctaType, ctaPath }) => {
    switch(ctaType) {
        case 'link': 
            return <Link to={ctaPath}>{ctaText}</Link>;
        case 'button': 
            return <Button color={ctaColor}>{ctaText}</Button>;
        case 'submit': 
            return <Button color={ctaColor} type={ctaType}>{ctaText}</Button>;
        default: return null;
    }
};

export default Cta;
