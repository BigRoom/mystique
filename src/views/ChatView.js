import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import Message                from 'components/Message';

class ChatView extends Component {
  render() {
    return (
      <div>
        <h1>Chat</h1>
        <div>
          {this.props.messages.map(message => (<Message key={message.time} {...message} />))}
        </div>
      </div>
    );
  }
}

export default connect(state => ({messages: state.messages}))(ChatView);
