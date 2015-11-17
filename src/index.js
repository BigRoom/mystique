import React             from 'react';
import { render }        from 'react-dom';
import Root              from 'containers/Root';

import store from 'store';
window.store = store;

// install raven for error reporting
Raven.config('http://80d0608554b64cc4a2958fc03cab1841@sentry.bigroom.co/7').install()

render(<Root store={store}/>, document.getElementById('root'));
