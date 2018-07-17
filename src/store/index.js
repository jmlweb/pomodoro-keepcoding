import { createStore } from 'redux';
import rootReducer from './reducer';

export {
  settingsSet,
  settingsFormSet,
  settingsFormSetWorkingTime,
  settingsFormSetRestingTime,
} from './actions';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
