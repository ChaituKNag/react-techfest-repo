import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Home,
  About,
  Heroes
} from './demo';


const App = () => (
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
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/heroes" component={Heroes} />
    </div>
  </Router>
);



export default App;