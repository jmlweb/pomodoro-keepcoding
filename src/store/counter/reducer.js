import {
  COUNTER_SET_MODE,
  COUNTER_SET_WORKING_TIME,
  COUNTER_SET_RESTING_TIME,
  COUNTER_SET_TARGET,
  COUNTER_RESET,
} from './actions';

import initialState from './initialState';

const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case COUNTER_SET_MODE:
      return { ...state, mode: payload };
    case COUNTER_SET_WORKING_TIME:
      return { ...state, workingTime: payload };
    case COUNTER_SET_RESTING_TIME:
      return { ...state, restingTime: payload };
    case COUNTER_SET_TARGET:
      const { workingTimeTarget, restingTimeTarget } = payload;
      return { ...state, workingTimeTarget, restingTimeTarget };
    case COUNTER_RESET:
      return initialState;
    default:
      return state;
  }
};

export default counterReducer;
