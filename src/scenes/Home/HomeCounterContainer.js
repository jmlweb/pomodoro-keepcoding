import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeCounter from './HomeCounter';
import {
  counterActiveSelector,
  counterModeSelector,
  workingTimeSelector,
  restingTimeSelector,
  workingTimeTargetSelector,
  restingTimeTargetSelector,
  counterSetMode as counterSetModeACT,
  counterSetTarget as counterSetTargetACT,
  counterSetWorkingTime as counterSetWorkingTimeACT,
  counterSetRestingTime as counterSetRestingTimeACT,
  counterReset as counterResetACT,
  archiveAdd as archiveAddACT,
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
    const INTERVAL_TIME = 250;
    this.interval = setInterval(() => {
      const {
        counterMode,
        workingTime,
        restingTime,
        counterSetMode,
        counterSetWorkingTime,
        counterSetRestingTime,
        counterReset,
        workingTimeTarget,
        restingTimeTarget,
        archiveAdd,
      } = this.props;
      if (counterMode === 'working') {
        const newTime = workingTime + INTERVAL_TIME;
        if (newTime >= workingTimeTarget) {
          counterSetMode('resting');
        } else {
          counterSetWorkingTime(newTime);
        }
      } else {
        const newTime = restingTime + INTERVAL_TIME;
        if (newTime >= restingTimeTarget) {
          archiveAdd({
            workingTime,
            workingTimeTarget,
            restingTime,
            restingTimeTarget,
          });
          counterReset();
        } else {
          counterSetRestingTime(newTime);
        }
      }
    }, INTERVAL_TIME);
  };
  stopInterval = () => {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
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
  workingTimeTarget: workingTimeTargetSelector(state),
  restingTimeTarget: restingTimeTargetSelector(state),
  settingsTarget: state.settings,
});

const mapDispatchToProps = {
  counterSetTarget: counterSetTargetACT,
  counterSetMode: counterSetModeACT,
  counterSetWorkingTime: counterSetWorkingTimeACT,
  counterSetRestingTime: counterSetRestingTimeACT,
  counterReset: counterResetACT,
  archiveAdd: archiveAddACT,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeCounterContainer);
