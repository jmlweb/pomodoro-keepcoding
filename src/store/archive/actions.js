import shortid from 'shortid';

export const ARCHIVE_ADD = 'ARCHIVE/ADD';

export const archiveAdd = payload => dispatch => {
  console.log('ENTRA A LA FUNCIÓN');
  setTimeout(() => {
    console.log('HACE EL DISPATCH');
    return dispatch({
      type: ARCHIVE_ADD,
      payload: {
        ...payload,
        id: shortid.generate(),
      },
    });
  }, 1000);
};

// export const archiveAdd = payload => ({
//   type: ARCHIVE_ADD,
//   payload: {
//     ...payload,
//     id: shortid.generate(),
//   },
// });
