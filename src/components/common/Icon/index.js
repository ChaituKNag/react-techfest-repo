import React from 'react';
import './css/all.css';

const Icon = ({ iconName, iconType, className }) => {
    switch(iconType) {
        case 'solid': 
            return <i className={`fas fa-${iconName} ${className}`}></i>;
        case 'regular': 
            return <i className={`far fa-${iconName} ${className}`}></i>;
        case 'light': 
            return <i className={`fal fa-${iconName} ${className}`}></i>;
        case 'brand': 
            return <i className={`fab fa-${iconName} ${className}`}></i>;
        default: return null;
    }
};

export default Icon;
