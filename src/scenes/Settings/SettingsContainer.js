import React, { Component } from 'react';
import { connect } from 'react-redux';
import Settings from './Settings';
import {
  settingsSet,
  settingsFormSet,
  settingsFormSetWorkingTime as settingsFormSetWorkingTimeACT,
  settingsFormSetRestingTime as settingsFormSetRestingTimeACT,
  settingsFormSetHasSuccess as settingsFormSetHasSuccessACT,
  workingTimeInMinSelector,
  restingTimeInMinSelector,
} from '../../store';

class SettingsContainer extends Component {
  componentDidMount() {
    const {
      settingsFormSet,
      initialWorkingTime,
      initialRestingTime,
    } = this.props;
    settingsFormSet({
      workingTime: initialWorkingTime,
      restingTime: initialRestingTime,
      hasSuccess: false,
    });
  }
  onChangeField = e => {
    const {
      settingsFormSetWorkingTime,
      settingsFormSetRestingTime,
    } = this.props;
    const fieldFn =
      e.target.name === 'workingTime'
        ? settingsFormSetWorkingTime
        : settingsFormSetRestingTime;
    fieldFn(e.target.value);
  };
  onSubmit = () => {
    const {
      workingTime,
      restingTime,
      settingsSet,
      settingsFormSetHasSuccess,
    } = this.props;
    settingsSet({
      workingTime,
      restingTime,
    });
    settingsFormSetHasSuccess(true);
  };
  render() {
    const { workingTime, restingTime, hasSuccess } = this.props;
    return (
      <Settings
        workingTime={workingTime}
        restingTime={restingTime}
        onChangeField={this.onChangeField}
        onSubmit={this.onSubmit}
        hasSuccess={hasSuccess}
      />
    );
  }
}

const mapStateToProps = state => ({
  initialWorkingTime: workingTimeInMinSelector(state),
  initialRestingTime: restingTimeInMinSelector(state),
  workingTime: state.settingsForm.workingTime,
  restingTime: state.settingsForm.restingTime,
  hasSuccess: state.settingsForm.hasSuccess,
});

const mapDispatchToProps = {
  settingsSet,
  settingsFormSet,
  settingsFormSetWorkingTime: settingsFormSetWorkingTimeACT,
  settingsFormSetRestingTime: settingsFormSetRestingTimeACT,
  settingsFormSetHasSuccess: settingsFormSetHasSuccessACT,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsContainer);
