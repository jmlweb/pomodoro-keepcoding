import { ARCHIVE_ADD } from './actions';
import initialState from './initialState';

const archiveReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ARCHIVE_ADD:
      return [...state, payload];
    default:
      return state;
  }
};

export default archiveReducer;
