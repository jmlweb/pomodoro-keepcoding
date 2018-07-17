import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeCounter from './HomeCounter';
import {
  counterActiveSelector,
  counterSetTarget as counterSetTargetACT,
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
  componentDidUpdate() {
    this.toggleIntervalIfNeeded();
  }
  startInterval = () => {
    this.interval = setInterval(() => console.log('interval'), 1000);
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
  settingsTarget: state.settings,
});

const mapDispatchToProps = {
  counterSetTarget: counterSetTargetACT,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeCounterContainer);
