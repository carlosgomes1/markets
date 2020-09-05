import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Index from '../pages/Index';
import Register from '../pages/Register';
import Login from '../pages/Login';

import Dashboard from '../pages/Dashboard';
import NewProduct from '../pages/NewProduct';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/newproduct" component={NewProduct} isPrivate />
    </Switch>
  );
};

export default Routes;
