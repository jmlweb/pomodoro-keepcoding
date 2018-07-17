export const SETTINGS_FORM_SET_ALL = 'SETTINGS_FORM/SET_WORKING_TIME_ALL';
export const SETTINGS_FORM_SET_WORKING_TIME = 'SETTINGS_FORM/SET_WORKING_TIME';
export const SETTINGS_FORM_SET_RESTING_TIME = 'SETTINGS_FORM/SET_RESTING_TIME';

export const settingsFormSet = payload => ({
  type: SETTINGS_FORM_SET_ALL,
  payload,
});

export const settingsFormSetWorkingTime = payload => ({
  type: SETTINGS_FORM_SET_WORKING_TIME,
  payload,
});

export const settingsFormSetRestingTime = payload => ({
  type: SETTINGS_FORM_SET_RESTING_TIME,
  payload,
});
