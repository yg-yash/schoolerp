import * as types from './types';

// export function getRequest() {
//   return {
//     type: types.GET_NOTE_REQUEST,
//   };
// }

// export function getFailed(error) {
//   return {
//     type: types.GET_NOTE_FAILED,
//     error,
//   };
// }

// export function getResponse(response) {
//   return {
//     type: types.GET_NOTE_RESPONSE,
//     response,
//   };
// }
export function addRequest(data) {
  return {
    type: types.ADD_TIMETABLE_REQUEST,
    data,
  };
}

export function addFailed(error) {
  return {
    type: types.ADD_TIMETABLE_FAILED,
    error,
  };
}

export function addResponse(response) {
  return {
    type: types.ADD_TIMETABLE_RESPONSE,
    response,
  };
}

export function addEnableLoader() {
  return {
    type: types.ENABLE_ADD_TIMETABLE_LOADER,
  };
}
export function addDisableLoader() {
  return {
    type: types.DISABLE_ADD_TIMETABLE_LOADER,
  };
}