import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import NotFound from './NotFound';
import About from './About';
import Contact from './Contact';

export default props => {
  return (
    <div>
      <h4>GoodFynd Digital Ocean Test</h4>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      <Switch>
        <Route
          exact
          path="/"
          component= {Home}
        />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};
