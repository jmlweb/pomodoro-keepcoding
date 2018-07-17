import { connect } from 'react-redux';
import HomeInfo from './HomeInfo';
import { counterModeSelector, clockValueSelector } from '../../store';

const mapStateToProps = state => ({
  mode: counterModeSelector(state),
  clockValue: clockValueSelector(state),
});

export default connect(mapStateToProps)(HomeInfo);
