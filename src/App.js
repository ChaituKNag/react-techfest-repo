import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import {
  Home,
  About,
  Heroes,
  Todos
} from './demo';
import store from './store';


const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/"><span role="img" aria-label="Home">🏠</span></Link>
          </li>
          <li>
            <Link to="/about"><span role="img" aria-label="About">😂</span></Link>
          </li>
          <li>
            <Link to="/heroes"><span role="img" aria-label="Heroes">🔥</span></Link>
          </li>
          <li>
            <Link to="/todos"><span role="img" aria-label="Heroes">😎</span></Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/heroes" component={Heroes} />
        <Route path="/Todos" component={Todos} />
      </div>
    </Router>
  </Provider>
);



export default App;