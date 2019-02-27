import React from 'react'
import styled from "styled-components";
import ProductCard from './ProductCard';
import Pagination from "../Pagination";

const ProductsList = styled.div`
  display: flex;
`

const Products = () => (
  <div>
    <ProductsList>
      <ProductCard name={'Amazon Echo Dot'} rating={4} numberOfRaters={140} subText={'Sub line text'} bestSelling={true} imageUrl={'https://images-na.ssl-images-amazon.com/images/I/910HREIJBdL._SL1500_.jpg'}/>

      <Pagination count={20} itemsPerPage={5} />

    </ProductsList>
  </div>
)

export { Products }