import initialState from './initialState';
import {
  SETTINGS_FORM_SET_ALL,
  SETTINGS_FORM_SET_WORKING_TIME,
  SETTINGS_FORM_SET_RESTING_TIME,
  SETTINGS_FORM_SET_HAS_SUCCESS,
} from './actions';

const settingsFormReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SETTINGS_FORM_SET_ALL:
      return { ...state, ...payload };
    case SETTINGS_FORM_SET_WORKING_TIME:
      return { ...state, workingTime: payload };
    case SETTINGS_FORM_SET_RESTING_TIME:
      return { ...state, restingTime: payload };
    case SETTINGS_FORM_SET_HAS_SUCCESS:
      return { ...state, hasSuccess: payload };
    default:
      return state;
  }
};

export default settingsFormReducer;
