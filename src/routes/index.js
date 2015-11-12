import React from 'react';

import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import App from 'components/App';
import Counter from 'components/Counter';

export default (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
      <Route path="counter" component={Counter} />
    </Route>
  </Router>
);
