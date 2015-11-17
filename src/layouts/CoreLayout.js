import React, { Component } from 'react';
import 'styles/core.scss';

export default class CoreLayout extends Component {
  static propTypes = {
    children: React.PropTypes.element
  }

  render() {
    return (
      <div className='page-container'>
        <div className='app-container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
