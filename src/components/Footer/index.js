import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom'; 

import { Container, Row, Col } from 'reactstrap';
import LogoComponent from '../common/LogoComponent';

const Footer = () => {
    return (
        <footer className="footer-container">
            <Container>
                <Row>
                    <Col>
                        <LogoComponent></LogoComponent>
                        <ul className="list-inline footer-navigation">
                            <li className="list-inline-item"><Link to='/'>Home</Link></li>
                            <li className="list-inline-item"><Link to='/'>Product Information</Link></li>
                            <li className="list-inline-item"><Link to='#'>Privacy Policy</Link></li>
                            <li className="list-inline-item"><Link to='#'>About Us</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;