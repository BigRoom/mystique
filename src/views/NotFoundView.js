import React, { Component } from 'react';
import { connect } from 'react-redux';

class NotFoundView extends Component {
  render() {
    return (
      <div>
        <h1>404 Not found</h1>
        <h3>{this.props.path} was not found.</h3>
      </div>
    )
  }
}

export default connect(state => ({path:state.routing.path}))(NotFoundView);
