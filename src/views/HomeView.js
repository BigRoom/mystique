import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import Message                from 'components/Message';

class HomeView extends Component {
  render() {
    return (
      <div>
        {this.props.messages.map(message => (<Message key={message.time} {...message} />))}
      </div>
    );
  }
}

export default connect(state => ({messages: state.messages}))(HomeView);
