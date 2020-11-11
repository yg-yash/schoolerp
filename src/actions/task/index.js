import * as types from './types';

export function addRequest(data) {
  return {
    type: types.ADD_TASK_REQUEST,
    data,
  };
}

export function addFailed(error) {
  return {
    type: types.ADD_TASK_FAILED,
    error,
  };
}

export function addResponse(response) {
  return {
    type: types.ADD_TASK_RESPONSE,
    response,
  };
}
export function getRequest(data) {
  return {
    type: types.GET_TASK_REQUEST,
    data,
  };
}

export function getFailed(error) {
  return {
    type: types.GET_TASK_FAILED,
    error,
  };
}

export function getResponse(response) {
  return {
    type: types.GET_TASK_RESPONSE,
    response,
  };
}

export function addEnableLoader() {
  return {
    type: types.ENABLE_ADD_TASK_LOADER,
  };
}
export function addDisableLoader() {
  return {
    type: types.DISABLE_ADD_TASK_LOADER,
  };
}
