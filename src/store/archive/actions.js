import shortid from 'shortid';

import { addPomodoro, getPomodoros } from '../../services';

export const ARCHIVE_ADD = 'ARCHIVE/ADD';
export const ARCHIVE_SET = 'ARCHIVE/SET';
export const ARCHIVE_GET = 'ARCHIVE/GET';

export const archiveAdd = payload => dispatch => {
  addPomodoro(
    {
      ...payload,
      id: shortid.generate(),
    },
    data =>
      dispatch({
        type: ARCHIVE_ADD,
        payload: data,
      }),
  );
};

export const archiveSet = payload => ({
  type: ARCHIVE_SET,
  payload,
});

export const archiveGet = () => dispatch =>
  getPomodoros(data => dispatch(archiveSet(data)));
