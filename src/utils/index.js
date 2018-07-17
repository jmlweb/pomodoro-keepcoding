export const minToMili = min => +min * 60 * 1000;

export const miliToMin = mili => +mili / 1000 / 60;

export const toClock = miliseconds => {
  const d = +miliseconds / 1000;
  const m = Math.floor((d % 3600) / 60);
  const s = Math.floor((d % 3600) % 60);
  return [m < 10 ? `0${m}` : m, s < 10 ? `0${s}` : s].join(':');
};
