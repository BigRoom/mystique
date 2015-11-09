import React, { Component } from 'react';
import { Link } from 'react-router';

export class App extends Component {
  render() {
    return (
      <div className='app'>
        <Link to='/counters'>Counters</Link>
        {this.props.children}
      </div>
    );
  }
};
