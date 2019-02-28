import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import {
  HeaderComponent,
  FooterComponent,
  PLPComponent,
  PDPComponent,
  CartComponent
} from './demo';
import store from './store';
import history from './history.js';


const App = () => (
  <div>
    
    <Provider store={store}>
      <Router>
        <div>
         <HeaderComponent/>
          <Route exact path="/" component={PLPComponent} />
          <Route exact path="/pdp/:productId" component={PDPComponent}  history={history}/>
          <Route path="/cart" component={CartComponent}  history={history}/>
          <FooterComponent/>
        </div>
      </Router>
    </Provider>
 
  </div>
);



export default App;