import React, { Component }   from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import Counter                from 'components/Counter';
import * as CounterActions    from 'actions/counter';

class CounterApp extends Component {
  render() {
    const { counter } = this.props;
    return (
      <Counter counter={counter} {...this.props} />
    );
  }
}

function select(state) {
  return {
    counter: state.counter
  }
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(select, mapDispatchToProps)(CounterApp);
