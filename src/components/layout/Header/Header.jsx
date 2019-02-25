import React, { Component } from 'react'
import './Header.scss';
import SearchBar from '../../common/searchbar/SearchBar';

class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-custom navbar-dark bd-navbar">
        <div className="nav-content">
          <a href="/" className="navbar-cust-brand">Ecommerce</a>
          <div className="search">
            <SearchBar />
          </div>
          <div className="nav-control">

          </div>
        </div>
      </header>
    )
  }
}

export default Header;
