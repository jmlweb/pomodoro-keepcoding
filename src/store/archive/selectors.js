import { createSelector } from 'reselect';

import { toClock } from '../../utils';

export const archiveSelector = state => state.archive;

export const formattedArchiveSelector = createSelector(
  archiveSelector,
  archive =>
    archive.map(({ workingTime, restingTime, createdAt, ...rest }) => ({
      ...rest,
      workingTime: toClock(workingTime),
      restingTime: toClock(restingTime),
      createdAt: new Date(createdAt).toLocaleString(),
    })),
);

export const archiveLengthSelector = createSelector(
  archiveSelector,
  archive => archive.length,
);
