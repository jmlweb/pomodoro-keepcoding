import { minToMili } from '../../utils';

export const SETTINGS_SET = 'SETTINGS/SET';

export const settingsSet = ({ workingTime, restingTime }) => ({
  type: SETTINGS_SET,
  payload: {
    workingTime: minToMili(workingTime),
    restingTime: minToMili(restingTime),
  },
});
