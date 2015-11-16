import React, { Component }                                       from 'react';
import { Provider }                                               from 'react-redux';
import DevTools                                                   from 'containers/DevTools';
import Wrapper                                                    from 'containers/Wrapper';

export default class App extends Component {
  componentDidMount() {
    // use require since import and export can only appear at the top level
    require('events/websocket')
  }
  render() {
    const { store } = this.props;
    return (
      <div className='root-container'>
        <Provider store={store}>
          <div className='dev-wrapper'>
            <Wrapper />
            <DevTools />
          </div>
        </Provider>
      </div>
    )
  }
}
