export const SETTINGS_FORM_SET = 'SETTINGS_FORM/SET_WORKING_TIME';
export const SETTINGS_FORM_SET_WORKING_TIME = 'SETTINGS_FORM/SET_WORKING_TIME';
export const SETTINGS_FORM_SET_RESTING_TIME = 'SETTINGS_FORM/SET_RESTING_TIME';

export const settingsFormSet = payload => ({
  type: SETTINGS_FORM_SET,
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
