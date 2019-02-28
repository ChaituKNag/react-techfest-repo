import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import {
  Home,
  Header,
  PlpPage,
  PdpPage,
  CartPage,
  Categories,
  AutoSuggestion,
  Footer
} from './demo';
import store from './store';
import logo from './images/header.png'
import './app.css';
import 'font-awesome/css/font-awesome.min.css'; 



const App = () => (
  <Provider store={store}>
   <Header/>  
    <Router>
      <div>
        

        <Route exact path="/" component={PlpPage} />
        <Route exact path="/product" component={PdpPage} />
        <Route exact path="/product/:id" component={PdpPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/search" component={AutoSuggestion} />
      </div>
    </Router>
   <Footer/>
  </Provider>
);



export default App;