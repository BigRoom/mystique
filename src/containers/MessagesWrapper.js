import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import Message                from 'components/Message';

class MessageApp extends Component {
  render() {
    return (
      <div>
        {this.props.messages.map(message => (<Message {...message} />))}
      </div>
    );
  }
}

export default connect(state => ({messages: state.messages}))(MessageApp);
