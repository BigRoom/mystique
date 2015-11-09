import React, { Component, PropTypes } from 'react';
import { Counter } from 'components/Counter';
import { NICE, SUPER_NICE, UBER_NICE } from 'constants/colors';

export class Counters extends Component {
  render() {
    return (
      <div className='counters'>
        <Counter increment={1} color={NICE} />
        <Counter increment={5} color={SUPER_NICE} />
        <Counter increment={11} color={UBER_NICE} />
      </div>
    )
  }
}
