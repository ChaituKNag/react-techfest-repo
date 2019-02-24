import React from 'react';
import Container from '../components/base/Container';
import Banner from '../components/Banner'
import { Categories } from "../components/Categories";
import { Products } from "../components/Products";

const Landing = () => (
    <div>
    <Container>
        <Banner />
        <h2>Landing Page listing comes here</h2>
        <div>
            <aside><Categories /></aside>
            <section><Products /></section>
        </div>
    </Container>
    </div>
);

export default Landing;