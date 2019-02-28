import styled from 'styled-components'
import PropTypes from 'prop-types'
import { mustard, charcoal, white } from '../../../styles/colors'
import { PRIMARY, MEDIUM, SMALL } from '../../../constants/properties'
import { fontWeightBold } from '../../../styles/variables'

const Button = styled.div`
  background-color: ${ props => (props.type === PRIMARY ? mustard : white)};
  border-radius: 5px;
  border: 1px solid ${mustard}; 
  cursor: pointer;
  color: ${charcoal};
  font-weight: ${fontWeightBold};
  padding: ${ props => ((props.size === MEDIUM) || props.size === SMALL ? '7px' : '10px')};
  text-align: center;
  text-transform: uppercase;
  width: ${ props => (props.size === SMALL ? '125px' : (props.size === MEDIUM ? '225px' : '300px'))};
`

Button.propTypes = {
  type: PropTypes.string
}

export default Button