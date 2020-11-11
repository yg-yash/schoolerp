import * as types from './types';

export function getRequest() {
  return {
    type: types.GET_VISITORS_REQUEST,
  };
}
export function getResponse(data) {
  return {
    type: types.GET_VISITORS_RESPONSE,
    data,
  };
}
export function getFailed(error) {
  return {
    type: types.GET_VISITORS_FAILED,
    error,
  };
}

export function addRequest(data) {
  return {
    type: types.ADD_VISITORS_REQUEST,
    data,
  };
}
export function addResponse(data) {
  return {
    type: types.ADD_VISITORS_RESPONSE,
    data,
  };
}
export function addFailed(error) {
  return {
    type: types.ADD_VISITORS_FAILED,
    error,
  };
}

export function enableAddLoader() {
  return {
    type: types.ENABLE_ADD_VISITORS_LOADER,
  };
}

export function disableAddLoader() {
  return {
    type: types.DISABLE_ADD_VISITORS_LOADER,
  };
}
