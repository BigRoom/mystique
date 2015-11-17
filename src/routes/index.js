import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout            from 'layouts/CoreLayout';
import StartView             from 'views/StartView';
import ChatView              from 'views/ChatView';

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={StartView} />
    <Route path='chat' component={ChatView} />
  </Route>
);
