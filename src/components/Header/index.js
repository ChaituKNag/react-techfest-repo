import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import "./header.scss";
import { getCartData } from '../../actions/CartActions';
import { getSuggestionsData, displaySuggestionsList } from "../../actions/SearchActions";

import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import Image from "../common/Image";
import Icon from "../common/Icon";
import InputComponent from "../common/InputComponent";
import LogoComponent from '../common/LogoComponent';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      searchTerm: ''
    };

    const self = this;

    this.props.history.listen(function() {
      self.props.displaySuggestionsList([]);
      self.setState({
        searchTerm: ''
      });
    }); 
  }

  componentDidMount() {
    this.props.getCartData();
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  getSuggestions(e) {
    this.props.getSearchSuggestions(e.target.value);
    this.setState({
      searchTerm: e.target.value
    });
  }

  render() {
    const { suggestionsList, cartCount, searchTerm } = this.props;
    return (
      <section className="header">
        <Container>
          <Row>
            <Col>
              <Navbar color="light" light expand="md">
                <LogoComponent></LogoComponent>
                <ul className="list-inline search-desktop">
                  <li>
                    <InputComponent
                      className="search"
                      inputType="search"
                      inputPlaceholder="Search item or keyword"
                      inputValue={this.state.searchTerm}
                      onChangeHandler={this.getSuggestions.bind(this)}
                    />
                    <Icon iconName="search" iconType="solid" />
                    {suggestionsList.length > 0 && (
                      <ul className="search-suggestions list-unstyled">
                        {suggestionsList.map(suggestion => (
                          <li key={suggestion.id}>
                            <Link to={`/product/${suggestion.id}`}>
                              {suggestion.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                </ul>
                <button
                  type="button"
                  className="navbar-toggler"
                  onClick={this.toggle}
                >
                  <Icon iconName="bars" iconType="solid" />
                </button>
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <InputComponent
                        className="search-mobile"
                        inputType="search"
                        inputPlaceholder="Search item or keyword"
                        inputValue={this.state.searchTerm}
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
                        <span className="cart-count">{cartCount}</span>
                      </Link>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret className="user-img">
                        <Image
                          imageSrc="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=monsterid&f=y"
                          imageAlt="user icon"
                          className="img-responsive"
                        />
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
    suggestionsList: state.search.suggestionsList,
    status: state.cart.cartData.status,
    cartCount: state.cart.cartCount
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSearchSuggestions: searchString => {
      dispatch(getSuggestionsData(searchString));
    },
    getCartData: () => {
      dispatch(getCartData());
    },
    displaySuggestionsList: (suggestionsList) => {
      dispatch(displaySuggestionsList(suggestionsList));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header));
