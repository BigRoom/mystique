import React             from 'react';
import { render }        from 'react-dom';
import App               from 'containers/App';
import connectWebSockets from 'events/websocket';

import 'styles/core.scss';

import configureStore from 'store';
const store = configureStore();

render(<App store={store}/>, document.getElementById('root'));

connectWebSockets('ws://echo.websocket.org');
