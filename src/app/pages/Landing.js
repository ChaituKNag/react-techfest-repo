import React from 'react'
import styled from 'styled-components'
import Container from '../components/base/Container'
import Banner from '../components/Banner'
import Categories from "../components/Category/Categories"
import Products from "../components/Products/Products"
import HeaderTag from '../components/base/HeaderTag'

const ProductsWrapper = styled.div`
  display:flex;
  flex-direction: row;
  margin-bottom: 30px;

  aside{
    display:flex;
    flex-direction: column;    
    flex: 1;
  }

  section{
    display: flex;
    flex-direction: column;
    flex: 3;
  }

  section h5{
    font-weight:bold;
    margin-left: 1%;
    padding-left: 3%; 
    margin-top: 5px;   
  }
`


const GridView = styled.div`
  display:flex;
  flex-direction: row;

  h5{
    display: flex;
    flex-direction: row;
    fleX: 1;
  }
`
const Landing = () => (
  <div>
    <Container>
      <Banner />
      <ProductsWrapper>
        <aside><Categories /></aside>
        <section>
          <GridView>
           <HeaderTag as='h5'>PRODUCTS</HeaderTag>
          </GridView>         
          <Products />
        </section>
        <br />
      </ProductsWrapper>
    </Container>
  </div>
)

export default Landing