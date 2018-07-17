import { combineReducers } from 'redux';

import { settingsReducer } from './settings';
import { settingsFormReducer } from './settingsForm';

export default combineReducers({
  settings: settingsReducer,
  settingsForm: settingsFormReducer,
});
