import React from 'react';

class Price extends React.Component {
    render() {
        const { price, currency } = this.props;
        return (
            <span>{currency}{parseFloat(Math.round(price * 100) / 100).toFixed(2)
            }</span>
        );
    }
}

export default Price;