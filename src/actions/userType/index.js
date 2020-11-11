import * as types from './types';

export function addRequest(name) {
  return {
    type: types.ADD_USER_TYPE_REQUEST,
    name,
  };
}

export function addFailed(error) {
  return {
    type: types.ADD_USER_TYPE_FAILED,
    error,
  };
}

export function addResponse(response) {
  return {
    type: types.ADD_USER_TYPE_RESPONSE,
    response,
  };
}
export function getRequest(data) {
  return {
    type: types.GET_USER_TYPE_REQUEST,
    data,
  };
}

export function getFailed(error) {
  return {
    type: types.GET_USER_TYPE_FAILED,
    error,
  };
}

export function getResponse(response) {
  return {
    type: types.GET_USER_TYPE_RESPONSE,
    response,
  };
}

export function addEnableLoader() {
  return {
    type: types.ENABLE_ADD_USER_TYPE_LOADER,
  };
}
export function addDisableLoader() {
  return {
    type: types.DISABLE_ADD_USER_TYPE_LOADER,
  };
}
