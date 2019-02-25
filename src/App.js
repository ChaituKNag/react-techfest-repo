import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import {
  Home,
  About,
  Heroes,
  Todos,
  TodosHooks,
  HeaderComponent,
  FooterComponent,
  PLPComponent,
  PDPComponent,
  CartComponent
} from './demo';
import store from './store';


const App = () => (
  <div>
    <HeaderComponent/>
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={PLPComponent} />
          <Route path="/PDP" component={PDPComponent} />
          <Route path="/cart" component={CartComponent} />
        </div>
      </Router>
    </Provider>
    <FooterComponent/>
  </div>
);



export default App;