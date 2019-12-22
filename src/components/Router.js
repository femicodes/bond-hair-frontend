import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import AllProducts from '../pages/AllProducts';
import NotFound from './NotFound/NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/products' component={AllProducts} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
