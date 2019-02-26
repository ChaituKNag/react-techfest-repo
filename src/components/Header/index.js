import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import './header.scss';

import { getSuggestionsData } from "../../actions/SearchActions";

import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import Image from '../common/Image';
import Icon from '../common/Icon';
import InputComponent from '../common/InputComponent';
import ListComponent from '../common/ListComponent';
import Cta from '../common/Cta';
import Rating from '../common/Rating';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    this.listData = ["one", "two", "three"];
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  getSuggestions(e) {
    const searchInput = e.target.value;
    if (searchInput.length > 2) {
      this.props.getSearchSuggestions(e.target.value);
    }
  }

  render() {
    const { suggestionsList } = this.props;
    return (
      <section className="header">
        <Container>
          <Row>
            <Col>
              <Navbar color="light" light expand="md">
                <Link to="/">
                  <span role="img" aria-label="Home">
                    E-commerce
                  </span>
                </Link>
                <ul className="list-inline search-desktop">
                  <li>
                    <InputComponent
                      className="search"
                      inputType="search"
                      inputPlaceholder="Search item or keyword"
                      onChangeHandler={this.getSuggestions.bind(this)}
                    />
                    <Icon iconName="search" iconType="solid" />
                    {suggestionsList.length > 0 && (
                      <ul className="search-suggestions list-unstyled">
                        {suggestionsList.map(suggestion => (
                          <li key={suggestion.id}>{suggestion.name}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                </ul>
                <button type="button" className="navbar-toggler" onClick={this.toggle}>
                  <Icon iconName="bars" iconType="solid" />
                </button>
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <InputComponent
                        className="search-mobile"
                        inputType="search"
                        inputPlaceholder="Search item or keyword"
                        onChangeHandler={this.getSuggestions.bind(this)}
                      />
                      <Icon iconName="search" iconType="solid" />
                      {suggestionsList.length > 0 && (
                        <ul className="search-suggestions-mobile list-unstyled">
                          {suggestionsList.map(suggestion => (
                            <li key={suggestion.id}>{suggestion.name}</li>
                          ))}
                        </ul>
                      )}
                    </NavItem>
                    <NavItem>
                      <Link to="/cart">
                        <Icon iconName="shopping-cart" iconType="solid" />
                        <span className="cart-count">1</span>
                      </Link>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret className="user-img">
                        <Image imageSrc="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=monsterid&f=y" imageAlt="user icon" className="img-responsive"></Image>
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>Option 1</DropdownItem>
                        <DropdownItem>Option 2</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Reset</DropdownItem>
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

const mapStateToProps = state => {
  return {
    suggestionsList: state.search.suggestionsList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSearchSuggestions: (searchString) => {
      dispatch(getSuggestionsData(searchString));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
