import * as types from './types';

export function requestAdmin(token) {
  return {
    type: types.GET_ADMIN_REQUEST,
    token,
  };
}

export function adminFailed(error) {
  return {
    type: types.GET_ADMIN_FAILED,
    error,
  };
}

export function responseAdmin(response) {
  return {
    type: types.GET_ADMIN_RESPONSE,
    response,
  };
}
