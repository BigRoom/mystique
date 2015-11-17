import React, { Component } from 'react';
import { ReduxRouter }      from 'redux-router';
import { Provider }         from 'react-redux';
import DevTools             from 'containers/DevTools';
import routes               from 'routes';

export default class Root extends Component {
  componentDidMount() {
    // use require since import and export can only appear at the top level
    require('events/websocket')
  }
  render() {
    const { store } = this.props;
    return (
      <div className='root-container'>
        <Provider store={store}>
          <div>
            <ReduxRouter>
              {routes}
            </ReduxRouter>
            <DevTools />
          </div>
        </Provider>
      </div>
    )
  }
}
