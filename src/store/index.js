import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
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
  archiveAdd,
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

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const persistor = persistStore(store);

export default {
  store,
  persistor,
};
