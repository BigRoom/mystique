import React, { Component, PropTypes } from 'react'

// TODO add vim keybinds for the message box

export default class MessageInput extends Component {
  static propTypes = {
    send_message: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.refs.contents.focus();
  }

  onEnter(e) {
    // prevent page from reloading
    e.preventDefault();

    this.props.send_message(this.refs.contents.value);
    // clear the message area
    this.refs.contents.value = '';
  }

  render() {
    return (
      <form onSubmit={::this.onEnter}>
        <input ref='contents' type="text" />
      </form>
    )
  }
}
