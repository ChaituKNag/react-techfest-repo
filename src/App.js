import React from "react";import Header from "./ecommerce/Header";
import Footer from "./ecommerce/Footer";
// import {ProductList} from "./ecommerce/ProductList";
import Pdp from "./ecommerce/Pdp";
import Cart from "./ecommerce/Cart";
import Default from "./ecommerce/Default";
// import browserHistory from 'react-router';
import { Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import ProductListContainer from "./containers/ProductListContainer";

const App = () => (
  <Provider store={store}>
  <div >
    <Header></Header>
    {/* <Router> */} 
        <Switch>
            <Route path="/pdp" component={Pdp} />
            <Route path="/cart" component={Cart} />
            <Route path="/" exact component={ProductListContainer} />
            <Route component={Default} />
        </Switch>
    {/* </Router> */}
    <Footer></Footer>
  </div>
</Provider>
);



export default App;