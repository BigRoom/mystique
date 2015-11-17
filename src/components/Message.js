import React, { Component, PropTypes } from 'react'

export default class Message extends Component {
  static propTypes = {
    from: PropTypes.string,
    content: PropTypes.string,
    time: PropTypes.number,
    channel: PropTypes.string,
    host: PropTypes.string
  }

  render() {
    return (
      <div className='chat-message'>
        <span className='chat-sender'>{this.props.from}</span><br/>
        <span className='chat-content'>{this.props.content}</span><br/>
        <span className='chat-time'>{Date(this.props.time)}</span><br/>
        <span className='chat-channel'>{this.props.channel}</span><br/>
        <span className='chat-host'>{this.props.host}</span><br/>
      </div>
    )
  }
}
