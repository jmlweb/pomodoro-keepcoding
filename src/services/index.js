import axios from 'axios';

const SERVER = 'http://localhost:9001';

export const getPomodoros = cb =>
  axios.get(`${SERVER}/pomodoros`).then(response => cb(response.data));

export const addPomodoro = (payload, cb) =>
  axios
    .post(`${SERVER}/pomodoros`, payload)
    .then(response => cb(response.data));
