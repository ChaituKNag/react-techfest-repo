import styled from 'styled-components';
import PropTypes from 'prop-types';
import { mustard, charcoal, white } from '../../../styles/colors';
import { PRIMARY } from '../../../constants/properties';
import { fontWeightBold } from '../../../styles/variables';

const Button = styled.div`
  background-color: ${ props => (props.type === PRIMARY ? mustard : white) };
  border-radius: 5px;
  border: 1px solid ${mustard};
  cursor: pointer;
  color: ${charcoal};
  font-weight: ${fontWeightBold};
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  width: 300px;
`

Button.propTypes = {
  type : PropTypes.string
}

export default Button