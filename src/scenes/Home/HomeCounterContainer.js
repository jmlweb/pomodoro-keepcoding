import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeCounter from './HomeCounter';
import {
  counterActiveSelector,
  counterModeSelector,
  workingTimeSelector,
  restingTimeSelector,
  counterSetTarget as counterSetTargetACT,
  counterSetWorkingTime as counterSetWorkingTimeACT,
  counterSetRestingTime as counterSetRestingTimeACT,
} from '../../store';

class HomeCounterContainer extends Component {
  interval = undefined;
  componentDidMount() {
    const {
      counterActive,
      counterSetTarget,
      settingsTarget: { workingTime, restingTime },
    } = this.props;
    if (!counterActive) {
      counterSetTarget({
        workingTimeTarget: workingTime,
        restingTimeTarget: restingTime,
      });
    }
    this.toggleIntervalIfNeeded();
  }
  componentWillUnmount() {
    this.stopInterval();
  }
  componentDidUpdate() {
    this.toggleIntervalIfNeeded();
  }
  startInterval = () => {
    const INTERVAL_TIME = 500;
    this.interval = setInterval(() => {
      const {
        counterMode,
        workingTime,
        restingTime,
        counterSetWorkingTime,
        counterSetRestingTime,
      } = this.props;
      if (counterMode === 'working') {
        counterSetWorkingTime(workingTime + INTERVAL_TIME);
      } else {
        counterSetRestingTime(restingTime + INTERVAL_TIME);
      }
    }, INTERVAL_TIME);
  };
  stopInterval = () => {
    if (this.interval) {
      clearInterval(this.interval);
    }
  };
  toggleIntervalIfNeeded = () => {
    const { counterActive } = this.props;
    if (counterActive) {
      if (!this.interval) {
        this.startInterval();
      }
    } else {
      if (this.interval) {
        this.stopInterval();
      }
    }
  };
  render() {
    return <HomeCounter />;
  }
}

const mapStateToProps = state => ({
  counterActive: counterActiveSelector(state),
  counterMode: counterModeSelector(state),
  workingTime: workingTimeSelector(state),
  restingTime: restingTimeSelector(state),
  settingsTarget: state.settings,
});

const mapDispatchToProps = {
  counterSetTarget: counterSetTargetACT,
  counterSetWorkingTime: counterSetWorkingTimeACT,
  counterSetRestingTime: counterSetRestingTimeACT,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeCounterContainer);
