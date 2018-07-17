import { createSelector } from 'reselect';
import { toClock } from '../../utils';

export const counterSelector = state => state.counter;

export const counterActiveSelector = createSelector(
  counterSelector,
  counter => counter.active,
);

export const counterModeSelector = createSelector(
  counterSelector,
  counter => counter.mode,
);

export const workingTimeSelector = createSelector(
  counterSelector,
  counter => counter.workingTime,
);

export const workingTimeTargetSelector = createSelector(
  counterSelector,
  counter => counter.workingTimeTarget,
);

export const restingTimeSelector = createSelector(
  counterSelector,
  counter => counter.restingTime,
);

export const restingTimeTargetSelector = createSelector(
  counterSelector,
  counter => counter.restingTimeTarget,
);

export const elapsedTimeSelector = createSelector(
  counterModeSelector,
  workingTimeSelector,
  restingTimeSelector,
  (mode, workingTime, restingTime) =>
    mode === 'working' ? workingTime : restingTime,
);

export const targetTimeSelector = createSelector(
  counterModeSelector,
  workingTimeTargetSelector,
  restingTimeTargetSelector,
  (mode, workingTimeTarget, restingTimeTarget) =>
    mode === 'working' ? workingTimeTarget : restingTimeTarget,
);

export const remainingTimeSelector = createSelector(
  elapsedTimeSelector,
  targetTimeSelector,
  (elapsedTimeSelector, targetTimeSelector) =>
    targetTimeSelector - elapsedTimeSelector,
);

export const completedTimeSelector = createSelector(
  elapsedTimeSelector,
  targetTimeSelector,
  (elapsedTime, targetTime) =>
    parseInt((elapsedTime / targetTime) * 100, 10) / 100,
);

export const clockValueSelector = createSelector(
  remainingTimeSelector,
  remainingTime => toClock(remainingTime),
);
