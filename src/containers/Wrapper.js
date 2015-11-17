import React, { Component }   from 'react';
// import CounterApp from 'containers/CounterApp';
import MessageApp from 'containers/MessagesWrapper';

export default class Wrapper extends Component {
  render() {
    return (
      <div className='app'>
        <MessageApp />
      </div>
    )
  }
}
