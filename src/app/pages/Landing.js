import React from 'react'
import styled from 'styled-components'
import Container from '../components/base/Container'
import Banner from '../components/Banner'
import Categories from "../components/Category/Categories"
import Products from "../components/Products/Products"
import HeaderTag from '../components/base/HeaderTag'

const ProductsWrapper = styled.div`
  display:flex;
  section h5{
    font-weight:bold;
    margin-left: 1%;
    padding-left: 3%; 
    margin-top: 5px;   
  }
`

const Landing = () => (
  <div>
    <Container>
      <Banner />
      <ProductsWrapper>
        <aside><Categories /></aside>
        <section>
          <HeaderTag as='h5'>PRODUCTS</HeaderTag>
          <Products />
        </section>
        <br />
      </ProductsWrapper>
    </Container>
  </div>
)

export default Landing