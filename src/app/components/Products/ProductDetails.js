import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { selectProductDetails, selectProductDescription } from '../../../store/selectors'
import { fetchProductDescription } from '../../../store/actions/product'

import Button from '../base/Button'
import { PRIMARY, MEDIUM } from '../../../constants/properties'
import ProductRating from './ProductRating'
import HeaderTag from '../base/HeaderTag'
import { addToCart } from '../../../services/cart'
import { white } from '../../../styles/colors'

const Wrapper = styled.section`
  display: flex;
  padding: 30px 0;
`

const ImageWrapper = styled.div`
  flex: 1;
  flex-basis: 25%;
  border-radius: 4px;
`
const ImageInnerWrapper = styled.div`  
  text-align: center;
  position: relative;
  padding-bottom: 100%;
  background: ${white};
  margin-bottom: 20px;

  img{
    width: auto;
    max-width: 90%;
    height: auto;
    max-height: 90%;
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
  }
`

const ButtonMedium = styled(Button)`
  margin: auto;
`

const DetailsWrapper = styled.div`
  flex: 3;
  flex-basis: 75%;
  padding: 0 75px 0 35px;
`
const ProductDetailsRating = styled.div`
  padding: 15px 0;
`
const Description = styled.p`
  white-space: pre-wrap;
`
const ListWrapper = styled.div`
  margin-top: 30px;
`
const List = styled.ul`
  list-style-type: bullet;
  margin: 0;
  padding: 10px 15px 0;
  &::
`
const ListItem = styled.li`
`

class ProductDetails extends PureComponent {

  componentDidMount() {
    const { productId, fetchProductDescription } = this.props
    fetchProductDescription(productId)
  }

  render() {
    const { details, description, history, productId } = this.props

    const buyProduct = () => {
      addToCart(1, productId).then(response => {
        if (response) {
          history.push('/cart')
        }
      })
        .catch(error => console.error(error))
    }
    return (
      <Wrapper>
        <ImageWrapper>
          <ImageInnerWrapper>
            <img src={details.imageUrl} alt={details.name} />
          </ImageInnerWrapper>
          <ButtonMedium type={PRIMARY} size={MEDIUM} onClick={buyProduct}>Buy Now</ButtonMedium>
        </ImageWrapper>
        <DetailsWrapper>
          <HeaderTag as='h3'>{details.name}</HeaderTag>
          <ProductDetailsRating><ProductRating rating={details.rating} /></ProductDetailsRating>
          <Description>
            {description}
          </Description>
          <ListWrapper>
            <HeaderTag as='h5'>Specifications</HeaderTag>
            <List>
              <ListItem>Smooth Layout</ListItem>
              <ListItem>All in one place</ListItem>
              <ListItem>Elegant Interface</ListItem>
            </List>
          </ListWrapper>
          <ListWrapper>
            <HeaderTag as='h5'>System Requirements</HeaderTag>
            <List>
              <ListItem>Smooth Layout</ListItem>
              <ListItem>All in one place</ListItem>
              <ListItem>Elegant Interface</ListItem>
            </List>
          </ListWrapper>
        </DetailsWrapper>
      </Wrapper>
    )
  }
}

ProductDetails.propTypes = {
  productId: PropTypes.string.isRequired,
  fetchProductDescription: PropTypes.func.isRequired,
  history: PropTypes.object,
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