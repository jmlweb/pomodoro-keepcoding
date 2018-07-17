export const COUNTER_SET_ACTIVE = 'COUNTER/SET_ACTIVE';
export const COUNTER_SET_MODE = 'COUNTER/SET_MODE';
export const COUNTER_SET_WORKING_TIME = 'COUNTER/SET_WORKING_TIME';
export const COUNTER_SET_RESTING_TIME = 'COUNTER/SET_RESTING_TIME';
export const COUNTER_SET_TARGET = 'COUNTER/SET_TARGET';
export const COUNTER_RESET = 'COUNTER/RESET';

export const counterSetActive = payload => ({
  type: COUNTER_SET_ACTIVE,
  payload,
});

export const counterSetMode = payload => ({
  type: COUNTER_SET_MODE,
  payload,
});

export const counterSetWorkingTime = payload => ({
  type: COUNTER_SET_WORKING_TIME,
  payload,
});

export const counterSetRestingTime = payload => ({
  type: COUNTER_SET_RESTING_TIME,
  payload,
});

export const counterSetTarget = payload => ({
  type: COUNTER_SET_TARGET,
  payload,
});

export const counterReset = () => ({
  type: COUNTER_RESET,
});
