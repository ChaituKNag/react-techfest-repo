import React from 'react';

class Price extends React.Component {
    render() {
        const { price, currency } = this.props;
        return (
            <span>{currency} {price}</span>
        );
    }
}

export default Price;