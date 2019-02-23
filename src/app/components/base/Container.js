import styled from 'styled-components';
import { media } from '../../../styles/variables';
import { whiteGray } from '../../../styles/colors';

const Container = styled.div`
  background-color: ${whiteGray};
  padding: 30px 60px;

  ${media.tablet`padding: 30px;`} ${media.mobile`padding: 20px 15px;`};
`

export default Container

