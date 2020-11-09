import * as types from './types';

export function getRequest() {
  return {
    type: types.GET_ASSIGNMENTS_REQUEST,
  };
}

export function getFailed(error) {
  return {
    type: types.GET_ASSIGNMENTS_FAILED,
    error,
  };
}

export function getResponse(response) {
  return {
    type: types.GET_ASSIGNMENTS_RESPONSE,
    response,
  };
}
export function addRequest(data) {
  console.log('Action', data);
  return {
    type: types.ADD_ASSIGNMENTS_REQUEST,
    data,
  };
}

export function addFailed(error) {
  return {
    type: types.ADD_ASSIGNMENTS_FAILED,
    error,
  };
}

export function addResponse(response) {
  return {
    type: types.ADD_ASSIGNMENTS_RESPONSE,
    response,
  };
}

export function addEnableLoader() {
  return {
    type: types.ENABLE_ADD_ASSIGNMENTS_LOADER,
  };
}
export function addDisableLoader() {
  return {
    type: types.DISABLE_ADD_ASSIGNMENTS_LOADER,
  };
}
