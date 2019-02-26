import React from 'react';
import Container from '../components/base/Container';
import ProductDetails from '../components/Products/ProductDetails';

const Details = ({ match }) => (
    <Container>
        <ProductDetails productId={match.params.id}/>
    </Container>
);

export default Details;