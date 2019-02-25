import React from 'react';
import Icon from '../Icon';

const Rating = ({ }) => (
    <ul className="list-inline">
        <li className="list-inline-item"><Icon iconName="star" iconType="solid"></Icon></li>
        <li className="list-inline-item"><Icon iconName="star" iconType="solid"></Icon></li>
        <li className="list-inline-item"><Icon iconName="star" iconType="solid"></Icon></li>
        <li className="list-inline-item"><Icon iconName="star-half-alt" iconType="solid"></Icon></li>
        <li className="list-inline-item"><Icon iconName="star" iconType="regular"></Icon></li>
    </ul>
);

export default Rating;
