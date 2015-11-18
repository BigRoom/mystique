import React, { Component, PropTypes } from 'react';
import 'styles/core.scss';

export default class CoreLayout extends Component {
  static propTypes = {
    children: PropTypes.element
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
