import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';

import { Header, Footer, Cart, ProductsList, ProductDetails } from './components';

import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={ProductsList} />
            <Route path="/product/:productId" component={ProductDetails} />
            <Route path="/cart" component={Cart} />
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;