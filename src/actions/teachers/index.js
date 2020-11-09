import * as types from './types';

export function getRequest() {
  return {
    type: types.GET_TEACHERS_REQUEST,
  };
}

export function getFailed(error) {
  return {
    type: types.GET_TEACHERS_FAILED,
    error,
  };
}

export function getResponse(response) {
  return {
    type: types.GET_TEACHERS_RESPONSE,
    response,
  };
}
