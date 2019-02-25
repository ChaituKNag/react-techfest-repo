import React from 'react';
import './css/all.css';

const Icon = ({ iconName, iconType }) => {
    switch(iconType) {
        case 'solid': 
            return <i className={`fas fa-${iconName}`}></i>;
        case 'regular': 
            return <i className={`far fa-${iconName}`}></i>;
        case 'light': 
            return <i className={`fal fa-${iconName}`}></i>;
        case 'brand': 
            return <i className={`fab fa-${iconName}`}></i>;
        default: return null;
    }
};

export default Icon;
