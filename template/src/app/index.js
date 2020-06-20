import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';

function App() {
  return (
    <Router>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <Switch>
        <Route path="*">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
