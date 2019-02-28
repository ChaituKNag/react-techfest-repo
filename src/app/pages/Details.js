import React from 'react'
import PropTypes from 'prop-types'
import Container from '../components/base/Container'
import ProductDetails from '../components/Products/ProductDetails'

const Details = ({ match, history }) => (
    <Container>
        <ProductDetails productId={match.params.id} history={history} />
    </Container>
);

export default Details;

Details.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object
}