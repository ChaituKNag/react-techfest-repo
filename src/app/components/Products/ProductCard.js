import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { white } from '../../../styles/colors'
import ProductTag from './ProductTag'
import ProductRating from './ProductRating'
import HeaderTag from '../base/HeaderTag'
import { fontWeightMedium } from '../../../styles/variables'
import { fontblack } from '../../../styles/colors'

const Wrapper = styled.div`
  background-color: ${white};
  width: 100%;
  border-radius: 3px;
  -webkit-box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.22);
  -moz-box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.22);
  box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.22);
  padding: 20px 0;
`

const ProductImage = styled.div`
  text-align: center;
  position: relative;
  padding-bottom: 90%;

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

const ProductDetail = styled.div`
  padding: 0 25px;
  h6{
    font-weight: bold;
    text-decoration: none;
    color: ${fontblack};
    margin-bottom: 10px;
    min-height: 80px;
  }
`

const SubText = styled.p`
  font-weight: ${fontWeightMedium};
  margin: 6px 0;
`

const ProductCard = ({ name, imageUrl, bestSelling, subText, numberOfRaters, rating, outOfStock }) => (
  <Wrapper style={outOfStock ? { opacity: 0.5 } : {}}>
    {bestSelling && <ProductTag>Best Selling</ProductTag>}
    <ProductImage>
      <img src={imageUrl} alt={name} />
    </ProductImage>
    <ProductDetail>
      <HeaderTag as='h6'>{name}</HeaderTag>
      {subText && <SubText>{subText}</SubText>}
      <ProductRating rating={rating} numberOfRaters={numberOfRaters} />
    </ProductDetail>
  </Wrapper>

)

export default ProductCard

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  bestSelling: PropTypes.bool,
  subText: PropTypes.string,
  numberOfRaters: PropTypes.number,
  rating: PropTypes.number.isRequired,
  outOfStock: PropTypes.bool
}