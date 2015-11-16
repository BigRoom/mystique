import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    increment_five: PropTypes.func.isRequired,
    decrement_five: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
  };

  render() {
    const {
      increment,
      decrement,
      increment_five,
      decrement_five,
      counter
    } = this.props;

    return (
      <div className='counter'>
        <h1>Clicked {counter} times</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={increment_five}>+5</button>
        <button onClick={decrement_five}>-5</button>
      </div>
    );
  }
};
