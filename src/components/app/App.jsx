import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../home/Home';
import Menu from '../menu/Menu';
import MobileNav from '../header/MobileNav';
import Admin from '../admin/Admin';

import './App.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/nav" component={MobileNav} />
        <Route exact path="/secret/admin" component={Admin} />
      </Switch>
    </Router>
  );
}
