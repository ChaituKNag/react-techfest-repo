import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import { Header, Icon } from 'semantic-ui-react';
import {
  Home,
  Products,
  ProductDetails,
  Cart
} from './demo';

import configureStore from './store';
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">
            <Header as='h3' color='yellow' className="inline-ele">
                E-COMMERCE
                <Header.Subheader>Platform</Header.Subheader>
            </Header></Link>
          </li>
          <li className="cart_link">
          <Link to="/cart">
            <Icon name="cart"></Icon>
          </Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/product/:id" component={ProductDetails}/>
        <Route path="/cart" component={Cart}/>
      </div>
    </Router>
  </Provider>
);



export default App;