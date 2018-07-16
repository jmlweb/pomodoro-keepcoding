import React, { Component } from 'react';
import { connect } from 'react-redux';
import Settings from './Settings';

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
    console.log(e.target.name, e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <Settings
        workingTime={this.state.workingTime}
        restingTime={this.state.restingTime}
        onChangeField={this.onChangeField}
      />
    );
  }
}

const mapStateToProps = state => ({
  workingTime: state.settings.workingTime,
  restingTime: state.settings.restingTime,
});

export default connect(mapStateToProps)(SettingsContainer);
