import { connect } from 'react-redux';
import HomeProgress from './HomeProgress';
import { completedTimeSelector } from '../../store';

const mapStateToProps = state => ({
  progressValue: completedTimeSelector(state),
});

export default connect(mapStateToProps)(HomeProgress);
