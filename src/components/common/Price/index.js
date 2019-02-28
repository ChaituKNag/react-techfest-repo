import React from 'react';
import propTypes from 'prop-types';

class Price extends React.Component {
    render() {
        const { price, currency } = this.props;
        return (
            <span className="price">{currency}{parseFloat(Math.round(price * 100) / 100).toFixed(2)
            }</span>
        );
    }
}

Price.propTypes = {
    price: propTypes.number,
    currency: propTypes.string
}

export default Price;