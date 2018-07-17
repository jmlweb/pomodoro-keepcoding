import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeInfo from './HomeInfo';
import { toClock } from '../../utils';

const getClockValue = (elapsed, target) => toClock(target - elapsed);

class HomeInfoContainer extends Component {
  render() {
    const {
      mode,
      workingTime,
      workingTimeTarget,
      restingTime,
      restingTimeTarget,
    } = this.props;
    const clockValue = getClockValue(
      ...(mode === 'working'
        ? [workingTime, workingTimeTarget]
        : [restingTime, restingTimeTarget]),
    );
    return <HomeInfo mode={mode} clockValue={`-${clockValue}`} />;
  }
}

const mapStateToProps = state => ({
  mode: state.counter.mode,
  workingTime: state.counter.workingTime,
  workingTimeTarget: state.counter.workingTimeTarget,
  restingTime: state.counter.restingTime,
  restingTimeTarget: state.counter.restingTimeTarget,
});

export default connect(mapStateToProps)(HomeInfoContainer);
