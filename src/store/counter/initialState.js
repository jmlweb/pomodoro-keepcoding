import { DEFAULT_WORKING_TIME, DEFAULT_RESTING_TIME } from '../../constants';

const initialState = {
  mode: 'working',
  workingTime: 0,
  workingTimeTarget: DEFAULT_WORKING_TIME,
  restingTime: 0,
  restingTimeTarget: DEFAULT_RESTING_TIME,
};

export default initialState;
