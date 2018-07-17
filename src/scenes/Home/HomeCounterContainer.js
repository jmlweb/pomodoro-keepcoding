import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeCounter from './HomeCounter';
import {
  counterActiveSelector,
  counterSetTarget as counterSetTargetACT,
} from '../../store';

class HomeCounterContainer extends Component {
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
  }
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
