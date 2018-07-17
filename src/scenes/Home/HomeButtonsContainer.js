import { connect } from 'react-redux';
import {
  counterSetActive as counterSetActiveACT,
  counterActiveSelector,
} from '../../store';
import HomeButtons from './HomeButtons';

const mapDispatchToProps = dispatch => {
  return {
    onClick: value => () => dispatch(counterSetActiveACT(value)),
  };
};

const mapStateToProps = state => {
  const active = counterActiveSelector(state);
  return {
    active,
    bg: active ? 'danger' : 'success',
    children: active ? 'Reset' : 'Iniciar',
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeButtons);
