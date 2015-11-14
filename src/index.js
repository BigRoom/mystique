import React      from 'react';
import { render } from 'react-dom';
import App        from 'containers/App';

import 'styles/core.scss';
import 'events/websocket';

import configureStore from 'store';
const store = configureStore();

render(<App store={store}/>, document.getElementById('root'));
