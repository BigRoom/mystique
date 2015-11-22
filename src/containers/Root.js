import React, { Component }  from 'react';
import { Router }            from 'react-router';
import { Provider }          from 'react-redux';
import createHistory         from 'history/lib/createBrowserHistory'
import { syncReduxAndRouter} from 'utils/redux-simple-router'
import DevTools              from 'containers/DevTools';
import routes                from 'routes';
import store                 from 'store';

const history = createHistory();
syncReduxAndRouter(history, store);

export default class Root extends Component {
  componentDidMount() {
    // use require since import and export can only appear at the top level
    require('events/websocket');
  }
  render() {
    return (
      <div className='root-container'>
        <Provider store={store}>
          <div>
            <Router history={history}>
              {routes}
            </Router>
            <DevTools />
          </div>
        </Provider>
      </div>
    )
  }
}
