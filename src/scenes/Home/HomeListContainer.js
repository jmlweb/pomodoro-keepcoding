import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeList from './HomeList';
import {
  archiveGet as archiveGetACT,
  formattedArchiveSelector,
  archiveLengthSelector,
} from '../../store';

class HomeListContainer extends Component {
  componentDidMount() {
    const { archiveGet } = this.props;
    // Llamar a la API para actualizar el state de archive
    archiveGet();
  }
  shouldComponentUpdate(nextProps) {
    return (
      this.props.pomodoros.map(id => id).join('-') !==
      nextProps.pomodoros.map(id => id).join('-')
    );
  }
  render() {
    console.log('HOMELISTCONTAINER RENDERIZA');
    const { pomodoros, pomodorosLength } = this.props;
    return <HomeList pomodoros={pomodoros} pomodorosLength={pomodorosLength} />;
  }
}

const mapStateToProps = state => ({
  pomodoros: formattedArchiveSelector(state),
  pomodorosLength: archiveLengthSelector(state),
});

const mapDispatchToProps = {
  archiveGet: archiveGetACT,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeListContainer);
