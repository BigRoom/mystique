import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout            from 'layouts/CoreLayout';
import StartView             from 'views/StartView';
import ChatView              from 'views/ChatView';
import NotFoundView          from 'views/NotFoundView';

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={StartView} />
    <Route path='chat' component={ChatView} />

    <Route path='*' component={NotFoundView} />
  </Route>
);
