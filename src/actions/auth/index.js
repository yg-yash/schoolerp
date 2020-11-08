import * as types from './types';

export function requestLogin(email, password, role, history) {
  return {
    type: types.LOGIN_REQUEST,
    email,
    password,
    role,
    history,
  };
}

export function loginFailed(error) {
  return {
    type: types.LOGIN_FAILED,
    error,
  };
}

export function onLoginResponse(response) {
  return {
    type: types.LOGIN_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.LOGIN_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.LOGIN_DISABLE_LOADER,
  };
}

export function logOut() {
  return {
    type: types.LOG_OUT,
  };
}
