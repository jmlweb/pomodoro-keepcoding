import { connect } from 'react-redux';
import {
  counterSetActive as counterSetActiveACT,
  counterReset as counterResetACT,
  counterActiveSelector,
} from '../../store';
import HomeButtons from './HomeButtons';

const mapDispatchToProps = dispatch => {
  return {
    onClick: value => () =>
      dispatch(value ? counterSetActiveACT(value) : counterResetACT()),
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
