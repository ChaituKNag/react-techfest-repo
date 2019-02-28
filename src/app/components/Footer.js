import React from 'react'
import styled from 'styled-components'
import HeaderTag from '../components/base/HeaderTag'
import { media, fontWeightLight } from '../../styles/variables'
import { white, fontblack } from '../../styles/colors'

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${white};
  color: #F2BD00;
  overflow: hidden;
  ${media.mobile`padding: 15px;`};
  >div{
    align-self:flex-start;
  }
`

const FooterInnerWrapper = styled.div`
  display:flex;
  flex-direction:column;
  max-width: 1400px;
  padding: 10px 70px;
  margin: 0 auto;
  width: 100%;
`

const SubTitle = styled.div`
    font-size: 12px;
    font-weight: ${fontWeightLight};
    margin: 0;
`
const FooterLinks = styled.div`
    margin-top: 10px;
    color: ${fontblack};
    font-size: 14px;

    a {
      color: ${fontblack};
      text-decoration: none;
    }
    a:hover{      
      text-decoration: underline;
    }

    a:after{
      content: '|';
      margin: 0 10px;
    }

    a:last-child:after{
      content: '';
    }
`

const Footer = () => (
  <FooterWrapper>
    <FooterInnerWrapper>
      <div>
        <HeaderTag as='h4'>E-Commerce</HeaderTag>
        <SubTitle>Platform</SubTitle>
      </div>
      <FooterLinks>
        <a href="/" tabIndex="0">Home</a>
        <a href="/product" tabIndex="0">Production Information</a>
        <a href="/privacy" tabIndex="0">Privacy Policy</a>
        <a href="/about" tabIndex="0">About Us</a>
      </FooterLinks>
    </FooterInnerWrapper>
  </FooterWrapper>
)

export default Footer