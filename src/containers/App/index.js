import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Routes from 'containers/Routes';

const App = () => (
  <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Boilerplate App</title>
    </Helmet>
    <Routes />
  </Fragment>
);

export default App;
