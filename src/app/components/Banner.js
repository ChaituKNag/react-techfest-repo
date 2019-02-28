import React from 'react'
import styled from 'styled-components'
import Button from './base/Button'
import { PRIMARY, SMALL } from '../../constants/properties'

const BannerImage = styled.div`
  display: flex;
  flex-direction: column;
  position:relative;
  max-width: 100%;
  max-height: 100%;
  margin-bottom: 30px;
  margin-top: 20px;
  height: 325px;
  background-image: url(https://www.echosetupsupport.com/wp-content/uploads/2018/10/cropped-Alexa-Page-Banner-Ad-2.jpg);
  background-size: 100% 100%;
`


const ButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 60px;
  left: 70px;
`
 
const Banner = () => (
  <BannerImage>  
    <ButtonWrapper>
      <Button type={PRIMARY} size={SMALL}>Explore</Button>    
    </ButtonWrapper>
    
  </BannerImage>
)

export default Banner