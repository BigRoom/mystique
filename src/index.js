import React             from 'react';
import { render }        from 'react-dom';
import App               from 'containers/App';

import 'styles/core.scss';
import 'events/websocket';

import store from 'store';

render(<App store={store}/>, document.getElementById('root'));
