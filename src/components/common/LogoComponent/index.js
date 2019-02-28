import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const LogoComponent = () => (
    <Link to="/" className="logo">
        <p>E-commerce</p>
        <span>Platform</span>
    </Link>
);

export default LogoComponent;
