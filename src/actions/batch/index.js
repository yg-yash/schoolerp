import * as types from './types';

export function addRequest(data) {
  return {
    type: types.ADD_BATCH_REQUEST,
    data,
  };
}

export function addResponse(data) {
  return {
    type: types.ADD_BATCH_RESPONSE,
    data,
  };
}

export function addFailed(error) {
  return {
    type: types.ADD_BATCH_FAILED,
    error,
  };
}

export function addEnableLoader() {
  return {
    type: types.ENABLE_ADD_BATCH_LOADER,
  };
}
export function addDisableLoader() {
  return {
    type: types.DISABLE_ADD_BATCH_LOADER,
  };
}

export function getCourseBatchRequest(id) {
  console.log(id, 'action');
  return {
    type: types.GET_COURSES_BATCH_REQUEST,
    id,
  };
}

export function getCourseBatchResponse(data) {
  return {
    type: types.GET_COURSES_BATCH_RESPONSE,
    data,
  };
}

export function getCourseBatchFailed(error) {
  return {
    type: types.GET_COURSES_BATCH_FAILED,
    error,
  };
}
