import React from 'react';
import styled from 'styled-components';
import Container from '../components/base/Container';
import Banner from '../components/Banner';
import { Categories } from "../components/Categories";
import { Products } from "../components/Products";
import Button from '../components/base/Button';
import ProductCard from '../components/base/ProductCard';
import { PRIMARY, SECONDARY } from '../../constants/porperties';

const ProductsList = styled.div`
  display: flex;
`

const Landing = () => (
  <div>
    <Container>
      <Banner />
      <h2>Landing Page listing comes here</h2>
      <div>
        <aside><Categories /></aside>
        <section><Products /></section><br />

        <Button type={PRIMARY}>Explore</Button>
        <Button type={SECONDARY}>Explore</Button><br></br>

        <ProductsList>
          <ProductCard name={'Amazon Echo Dot'} rating={4} numberOfRaters={140} subText={'Sub line text'} bestSelling={true} imageUrl={'https://images-na.ssl-images-amazon.com/images/I/910HREIJBdL._SL1500_.jpg'}/>
        </ProductsList>

      </div>
    </Container>
  </div>
);

export default Landing;