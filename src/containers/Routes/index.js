import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from 'components/Loading';

const Home = Loadable({
  loader: () => import('views/Home'),
  delay: 300,
  loading: Loading
});

// Views

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
