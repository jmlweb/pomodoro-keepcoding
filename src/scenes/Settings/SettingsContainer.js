import React, { Component } from 'react';
import { connect } from 'react-redux';
import Settings from './Settings';
import { settingsSet } from '../../store';

class SettingsContainer extends Component {
  state = {
    workingTime: this.props.workingTime,
    restingTime: this.props.restingTime,
  };
  static getDerivedStateFromProps({ workingTime, restingTime }) {
    return {
      workingTime,
      restingTime,
    };
  }
  onChangeField = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = () => {
    this.props.settingsSet(this.state);
  };
  render() {
    return (
      <Settings
        workingTime={this.state.workingTime}
        restingTime={this.state.restingTime}
        onChangeField={this.onChangeField}
        onSubmit={this.onSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  workingTime: state.settings.workingTime,
  restingTime: state.settings.restingTime,
});

const mapDispatchToProps = {
  settingsSet,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsContainer);
