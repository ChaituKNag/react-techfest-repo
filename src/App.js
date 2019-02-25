import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import {
  Home,
  About,
  Heroes,
  Todos,
  TodosHooks
} from './demo';
import store from './store';


const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/heroes" component={Heroes} />
        <Route path="/todos" exact component={Todos} />
        <Route path="/todos-hooks" component={TodosHooks} />
      </div>
    </Router>
  </Provider>
);



export default App;