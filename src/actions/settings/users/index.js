import * as types from './types';

export function getRequest(id) {
  return {
    type: types.GET_USERS_REQUEST,
    id,
  };
}
export function getResponse(data) {
  return {
    type: types.GET_USERS_RESPONSE,
    data,
  };
}
export function getFailed(error) {
  return {
    type: types.GET_USERS_FAILED,
    error,
  };
}
