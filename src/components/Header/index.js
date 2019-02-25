import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import {
    Container, Row, Col,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import Image from '../common/Image';
import Icon from '../common/Icon';
import InputComponent from '../common/InputComponent';
import ListComponent from '../common/ListComponent';
import Cta from '../common/Cta';
import { faShoppingCart } from '../common/FontIcons';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
        this.listData = ['one', 'two', 'three'];
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <section className="header">
                <Container>
                    <Row>
                        <Col>
                            <Navbar color="light" light expand="md">
                                <Link to="/"><span role="img" aria-label="Home">E-commerce</span></Link>
                                <NavbarToggler onClick={this.toggle} />
                                <Collapse isOpen={this.state.isOpen} navbar>
                                    <Nav className="ml-auto" navbar>
                                        <NavItem>
                                            <Link to="/cart"><Icon iconName={faShoppingCart}></Icon></Link>
                                        </NavItem>
                                        <UncontrolledDropdown nav inNavbar>
                                            <DropdownToggle nav caret>
                                                Options
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem>
                                                    Option 1
                                                </DropdownItem>
                                                <DropdownItem>
                                                    Option 2
                                                </DropdownItem>
                                                <DropdownItem divider />
                                                <DropdownItem>
                                                    Reset
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    </Nav>
                                </Collapse>
                            </Navbar>
                            <ListComponent listData={this.listData}></ListComponent>
                            <Cta ctaColor="danger" ctaText="Button" ctaType="button"></Cta>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}
