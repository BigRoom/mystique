import React             from 'react';
import { render }        from 'react-dom';
import App               from 'containers/App';

import 'styles/core.scss';
// import 'events/websocket';

import store from 'store';

window.store = store;

// install raven for error reporting
Raven.config('http://80d0608554b64cc4a2958fc03cab1841@sentry.bigroom.co/7').install()

render(<App store={store}/>, document.getElementById('root'));
