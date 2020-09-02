import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from './pages/Index';
import Register from './pages/Register';
import Login from './pages/Login';

import Home from './pages/Home';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
    </Switch>
  );
};

export default Routes;
