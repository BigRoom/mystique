import React, { Component }   from 'react';
import CounterApp from 'containers/CounterApp';

export default class Wrapper extends Component {
  render() {
    return (
      <div className='app'>
        <CounterApp />
      </div>
    )
  }
}
