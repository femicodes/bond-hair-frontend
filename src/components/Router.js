import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import AllProducts from '../pages/AllProducts';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';
import NotFound from './NotFound/NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/products' component={AllProducts} />
      <Route path='/ones' component={ProductDetail} />
      <Route path='/cart' component={Cart} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
