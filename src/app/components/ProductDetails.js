import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { selectProductDetails, selectProductDescription } from '../../store/selectors';
import { fetchProductDescription } from '../../store/actions/product';
import Button from './base/Button';
import { PRIMARY } from '../../constants/porperties';
import ProductRating from './base/ProductRating';
import HeaderTag from './base/HeaderTag'

const Wrapper = styled.section`
  display: flex;
  padding: 30px 0;
`

const ImageWrapper = styled.div`
  flex: 1;
  padding: 15px;
  img{
    margin-bottom: 20px;
  }
`

const DetailsWrapper = styled.div`
  flex: 3;
  padding: 0 15px;
`

const ProductDetailsRating = styled.div`
  padding: 15px 0;
`
const Description = styled.p`
  white-space: pre-wrap;
`

class ProductDetails extends PureComponent{

  componentDidMount () {
    const { productId, fetchProductDescription } = this.props;
    fetchProductDescription(productId);
  }

  render() {
    const { details, description } = this.props;
    return(
      <Wrapper>
        <ImageWrapper>
          <img src={details.imageUrl} alt={details.name} />
          <Button type={PRIMARY}>Buy Now</Button>
        </ImageWrapper>
        <DetailsWrapper>
          <HeaderTag as='h3'>{details.name}</HeaderTag>
          <ProductDetailsRating><ProductRating rating={details.rating} /></ProductDetailsRating>
          <Description>
            {description}
          </Description>
        </DetailsWrapper>
      </Wrapper>
    )
  }
}

ProductDetails.propTypes = {
  productId: PropTypes.string.isRequired,
  fetchProductDescription: PropTypes.func.isRequired,
  details: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.number,
    price: PropTypes.number,
    discount: PropTypes.number,
    inStock: PropTypes.number
  }),
  description: PropTypes.string,
}

const mapStateToProps = (state, ownProps) => ({
  details: selectProductDetails(state),
  description: selectProductDescription(state),
  ...ownProps
})

  
export default connect(
  mapStateToProps,
  {
    fetchProductDescription
  }
)(ProductDetails)