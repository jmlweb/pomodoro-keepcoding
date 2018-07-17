import { createSelector } from 'reselect';
import { miliToMin } from '../../utils';

export const settingsSelector = state => state.settings;

export const settingsInMinSelector = createSelector(
  settingsSelector,
  ({ workingTime, restingTime, ...settings }) => ({
    ...settings,
    workingTime: miliToMin(workingTime),
    restingTime: miliToMin(restingTime),
  }),
);

export const workingTimeInMinSelector = createSelector(
  settingsInMinSelector,
  settingsInMin => settingsInMin.workingTime,
);

export const restingTimeInMinSelector = createSelector(
  settingsInMinSelector,
  settingsInMin => settingsInMin.restingTime,
);
