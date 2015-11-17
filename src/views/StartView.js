import React, { Component }   from 'react';
import { Link } from 'react-router';

export default class ChatView extends Component {
  render() {
    return (
      <div>
        <h1>Hello, welcome to bigroom</h1>
        <Link to='chat'>Go to chat</Link>
      </div>
    );
  }
};
