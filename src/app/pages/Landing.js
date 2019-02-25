import React from 'react';
import Container from '../components/base/Container';
import Banner from '../components/Banner';
import { Categories } from "../components/Categories";
import { Products } from "../components/Products";
import Button from '../components/base/Button'; 
import ProductTag from '../components/base/ProductTag';
import ProductRating from '../components/base/ProductRating'
import { PRIMARY, SECONDARY } from '../../constants/porperties';

const Landing = () => (
    <div>
    <Container>
        <Banner />
        <h2>Landing Page listing comes here</h2>
        <div>
            <aside><Categories /></aside>
            <section><Products /></section><br/>
            <ProductTag>Hot Deal</ProductTag><br/>
            <Button type={PRIMARY}>Explore</Button>
            <Button type={SECONDARY}>Explore</Button><br></br>

            <ProductRating rating={3} numberOfRaters={134} />
        </div>
    </Container>
    </div>
);

export default Landing;