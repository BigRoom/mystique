import React, { Component }   from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import { send_message }       from 'actions/chat';
import MessageList            from 'components/MessageList';
import MessageInput           from 'components/MessageInput';

class ChatView extends Component {
  render() {
    return (
      <div>
        <h1>Chat</h1>
        <MessageList messages={this.props.messages} />
        <MessageInput send_message={this.props.send_message} />
      </div>
    );
  }
}

export default connect(state => ({messages: state.messages}),
                       dispatch => bindActionCreators({send_message}, dispatch))(ChatView);
