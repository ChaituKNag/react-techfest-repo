import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { connect } from "react-redux";

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

import Image from "../common/Image";
import Icon from "../common/Icon";
import InputComponent from "../common/InputComponent";
import ListComponent from "../common/ListComponent";
import Cta from "../common/Cta";
import { faShoppingCart } from "../common/FontIcons";

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
    if(searchInput.length > 2) {
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
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <InputComponent
                        inputType="search"
                        inputPlaceholder="Search"
                        onChangeHandler={this.getSuggestions.bind(this)}
                      />
                      {suggestionsList.length > 0 && (
						<ul className="applied-voucher-list">
							{suggestionsList.map(suggestion => (
								<li key={suggestion.id}>{suggestion.name}</li>
							))}
						</ul>
					)}
                    </NavItem>
                    <NavItem>
                      <Link to="/cart">
                        <Icon iconName={faShoppingCart} />
                      </Link>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Options
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
              <ListComponent listData={this.listData} />
              <Cta ctaColor="danger" ctaText="Button" ctaType="button" />
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
