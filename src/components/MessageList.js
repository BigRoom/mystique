import React, { Component, PropTypes } from 'react';
import Message from 'components/Message';

export default class MessageList extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired
  }

  componentDidUpdate() {
    // TODO put `<MessageList />` in a div that has an explicit height property
    this.refs.messages.scrollTop = this.refs.messages.scrollHeight;
  }

  render() {
    return (
      <div className='messages-list' ref='messages'>
        {/* Use key of `i` since I keep forgetting to change the timestamp when manually sending events */}
        {this.props.messages.map((message, i) => (<Message key={i} {...message} />))}
      </div>
    );
  }
}
