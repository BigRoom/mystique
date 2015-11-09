import React from 'react';

import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

import { App } from 'components/App';
import { Counters } from 'components/Counters'

export default (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
      <Route path="counters" component={Counters} />
    </Route>
  </Router>
);
