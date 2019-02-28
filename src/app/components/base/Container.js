import styled from 'styled-components'
import { media } from '../../../styles/variables'
import { whiteGray } from '../../../styles/colors'

const Container = styled.div`
  background-color: ${whiteGray};
  max-width: 1400px;
  padding: 74px 70px 0;
  margin: 0 auto;

  ${media.tablet`padding: 30px;`} ${media.mobile`padding: 20px 15px;`};
`

export default Container

