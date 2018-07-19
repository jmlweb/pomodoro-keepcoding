import { ARCHIVE_ADD, ARCHIVE_SET } from './actions';
import initialState from './initialState';

const archiveReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ARCHIVE_ADD:
      return [...state, payload];
    case ARCHIVE_SET:
      return payload;
    default:
      return state;
  }
};

export default archiveReducer;
