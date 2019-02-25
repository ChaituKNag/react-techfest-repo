import React from 'react';
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
import { faStar } from '../common/FontIcons';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
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
                                <NavbarBrand href="/">reactstrap</NavbarBrand>
                                <NavbarToggler onClick={this.toggle} />
                                <Collapse isOpen={this.state.isOpen} navbar>
                                    <Nav className="ml-auto" navbar>
                                        <NavItem>
                                            <NavLink href="/components/">Components</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                                        </NavItem>
                                        <UncontrolledDropdown nav inNavbar>
                                            <DropdownToggle nav caret>
                                                Options
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem>
                                                    Option 1 <Icon iconName={faStar}></Icon>
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
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}
