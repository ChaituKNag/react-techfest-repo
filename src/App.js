import React from "react";import Header from "./ecommerce/Header";
import Footer from "./ecommerce/Footer";
import Default from "./ecommerce/Default";
// import browserHistory from 'react-router';
import { Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import ProductListContainer from "./containers/ProductListContainer";
import { withRouter } from 'react-router-dom';
import PdpContainer from "./containers/PdpContainer";
import CartContainer from "./containers/CartContainer";
import {Redirect} from "@reach/router";
import Login from "./ecommerce/Login";


const App = () => (
  <Provider store={store}>
  <div >
    <Header></Header>
    {/* <Router> */} 
        <Switch>
            <Route path="/pdp" component={PdpContainer} />
            <Route path="/cart" component={CartContainer} />
            <Redirect from="/" to="pdp" noThrow default />
            {/* <Route path="/plp" component={ProductListContainer} /> */}
            <Route path="/" exact component={ProductListContainer} />
            <Route component={Default} />
        </Switch>
    {/* </Router> */}
    <Footer></Footer>
  </div>
</Provider>
);



export default withRouter(App);