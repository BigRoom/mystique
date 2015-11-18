import React, { Component, PropTypes } from 'react';
import moment from 'moment';

export default class Message extends Component {
  static propTypes = {
    from: PropTypes.string,
    content: PropTypes.string.isRequired,
    time: PropTypes.number,
    channel: PropTypes.string,
    host: PropTypes.string
  };

  render() {
    const { from, content, time, channel, host } = this.props;
    const date = moment(time);
    return (
      <div className='message-container'>
        <div>
          <span className='message-info'>@{from}</span> <span className='text-muted'>{date.format('h:mm:ss a')}</span>
          <span className='message-extra text-muted'> {channel} {host}</span>
        </div>
        <div>
          <span className='message-content'>{content}</span><br/>
        </div>
      </div>
    );
  }
};
