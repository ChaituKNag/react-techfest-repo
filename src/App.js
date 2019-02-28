import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import Header from "./components/layout/Header/Header";
import ProductListContainer from "./containers/plpContainer/PlpContainer";
import ProductDetailContainer from "./containers/pdpContainer/PdpContainer";
import Checkout from "./containers/checkout/Checkout";


const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={ProductListContainer} />
        <Route exact path="/product/:id" component={ProductDetailContainer} />
        <Route exact path="/checkout" component={Checkout} />
      </div>
    </Router>
  </Provider>
);



export default App;