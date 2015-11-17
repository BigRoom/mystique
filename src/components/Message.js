import React, { Component, PropTypes } from 'react';

export default class Message extends Component {
  static propTypes = {
    from: PropTypes.string,
    content: PropTypes.string,
    time: PropTypes.number,
    channel: PropTypes.string,
    host: PropTypes.string
  };

  render() {
    const { from, content, time, channel, host } = this.props;
    const date = new Date(time);
    return (
      <div className='chat-message'>
        <span className='chat-sender'>@{from}</span><br/>
        <span className='chat-content'>"{content}"</span><br/>
        <span className='chat-time'>{date.toString()}</span><br/>
        <span className='chat-channel'>{channel}</span><br/>
        <span className='chat-host'>{host}</span><br/>
      </div>
    );
  }
};
