import shortid from 'shortid';

export const ARCHIVE_ADD = 'ARCHIVE/ADD';

export const archiveAdd = payload => ({
  type: ARCHIVE_ADD,
  payload: {
    ...payload,
    id: shortid.generate(),
  },
});
