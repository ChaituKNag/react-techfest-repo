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
            <Link to="/todos"><span role="img" aria-label="Todos">😎</span></Link>
          </li>
          <li>
            <Link to="/todos-hooks"><span role="img" aria-label="Todos Hooks">💩</span></Link>
          </li>
        </ul>

        <hr />

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