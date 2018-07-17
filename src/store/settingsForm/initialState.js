import { DEFAULT_WORKING_TIME, DEFAULT_RESTING_TIME } from '../../constants';
import { miliToMin } from '../../utils';

const initialState = {
  hasSuccess: false,
  workingTime: miliToMin(DEFAULT_WORKING_TIME),
  restingTime: miliToMin(DEFAULT_RESTING_TIME),
};

export default initialState;
