import { combineReducers } from 'redux';

import { settingsReducer } from './settings';
import { settingsFormReducer } from './settingsForm';
import { counterReducer } from './counter';

export default combineReducers({
  settings: settingsReducer,
  settingsForm: settingsFormReducer,
  counter: counterReducer,
});
