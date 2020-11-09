import * as types from './types';

export function addRequest(data) {
  return {
    type: types.ADD_CLASS_TEACHER_REQUEST,
    data,
  };
}

export function addResponse(data) {
  return {
    type: types.ADD_CLASS_TEACHER_RESPONSE,
    data,
  };
}

export function addFailed(error) {
  return {
    type: types.ADD_CLASS_TEACHER_FAILED,
    error,
  };
}
// export function getRequest() {
//   return {
//     type: types.GET_COURSE_REQUEST,
//   };
// }

// export function getResponse(data) {
//   return {
//     type: types.GET_COURSE_RESPONSE,
//     data,
//   };
// }

// export function getFailed(error) {
//   return {
//     type: types.GET_COURSE_FAILED,
//     error,
//   };
// }

export function addEnableLoader() {
  return {
    type: types.ENABLE_ADD_CLASS_TEACHER_LOADER,
  };
}
export function addDisableLoader() {
  return {
    type: types.DISABLE_ADD_CLASS_TEACHER_LOADER,
  };
}

// export function getEnableLoader() {
//   return {
//     type: types.ENABLE_GET_COURSE_LOADER,
//   };
// }
// export function getDisableLoader() {
//   return {
//     type: types.DISABLE_GET_COURSE_LOADER,
//   };
// }
