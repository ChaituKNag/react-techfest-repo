import styled from 'styled-components';
import PropTypes from 'prop-types';
import { mustard, charcoal, white } from '../../../styles/colors';
import { PRIMARY } from '../../../constants/porperties';

const Button = styled.div`
  background-color: ${ props => (props.type === PRIMARY ? mustard : white) };
  border-radius: 5px;
  border: 1px solid ${mustard};
  color: ${charcoal};
  font-weight: 700;
  padding: 20px;
  text-align: center;
  text-transform: uppercase;
  width: 300px;
`

Button.propTypes = {
  type : PropTypes.string
}

export default Button