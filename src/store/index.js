import { createStore } from 'redux';
import rootReducer from './reducer';

export {
  settingsSet,
  settingsFormSet,
  settingsFormSetWorkingTime,
  settingsFormSetRestingTime,
  settingsFormSetHasSuccess,
  counterSetActive,
  counterSetMode,
  counterSetWorkingTime,
  counterSetRestingTime,
  counterSetTarget,
  counterReset,
} from './actions';

export {
  counterSelector,
  counterActiveSelector,
  counterModeSelector,
  workingTimeSelector,
  workingTimeTargetSelector,
  restingTimeSelector,
  restingTimeTargetSelector,
  remainingTimeSelector,
  elapsedTimeSelector,
  targetTimeSelector,
  completedTimeSelector,
  clockValueSelector,
  settingsSelector,
  settingsInMinSelector,
  workingTimeInMinSelector,
  restingTimeInMinSelector,
} from './selectors';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
