import initialState from './initialState';
import { SETTINGS_SET } from './actions';

const settingsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SETTINGS_SET:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default settingsReducer;
