import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from './pages/Index';
import Register from './pages/Register';
import Login from './pages/Login';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
