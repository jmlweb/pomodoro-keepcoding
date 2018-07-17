import React, { Component } from 'react';
import { connect } from 'react-redux';
import Settings from './Settings';
import {
  settingsSet,
  settingsFormSet,
  settingsFormSetWorkingTime as settingsFormSetWorkingTimeACT,
  settingsFormSetRestingTime as settingsFormSetRestingTimeACT,
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
    const { workingTime, restingTime, settingsSet } = this.props;
    settingsSet({
      workingTime,
      restingTime,
    });
  };
  render() {
    const { workingTime, restingTime } = this.props;
    return (
      <Settings
        workingTime={workingTime}
        restingTime={restingTime}
        onChangeField={this.onChangeField}
        onSubmit={this.onSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  initialWorkingTime: state.settings.workingTime,
  initialRestingTime: state.settings.restingTime,
  workingTime: state.settingsForm.workingTime,
  restingTime: state.settingsForm.restingTime,
});

const mapDispatchToProps = {
  settingsSet,
  settingsFormSet,
  settingsFormSetWorkingTime: settingsFormSetWorkingTimeACT,
  settingsFormSetRestingTime: settingsFormSetRestingTimeACT,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsContainer);
