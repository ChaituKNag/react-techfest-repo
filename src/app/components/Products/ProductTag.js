import styled from 'styled-components'
import { red, white } from '../../../styles/colors'
import { fontWeightLight } from '../../../styles/variables'

const ProductTag = styled.span`
  color: ${white};
  display: inline-block;
  background-color: ${red};
  min-width: 70px;
  font-size: 14px;
  padding: 5px 15px;
  font-weight: ${fontWeightLight};
`

export default ProductTag