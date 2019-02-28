import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { mustard, charcoal, steel } from '../../../styles/colors'

const Star = styled.span`
  font-size: 1.125em;
  color: ${ props => (props.checked ? mustard : charcoal)};
`

const Raters = styled.span`
  color: ${steel};
`

const ProductRating = ({ rating, numberOfRaters }) => {
  const stars = [false, false, false, false, false];
  stars.forEach((star, index) => {
    if (index < rating) {
      stars[index] = true;
    }
  })

  return (
    <div>
      {stars.map((star, index) => <Star className="icon icon-star" checked={star} key={index} />)}
      { numberOfRaters && <Raters>({numberOfRaters})</Raters> }
    </div>
  )
}

Star.propTypes = {
  checked: PropTypes.bool
}

ProductRating.propTypes = {
  rating: PropTypes.number,
  numberOfRaters: PropTypes.number
}

export default ProductRating