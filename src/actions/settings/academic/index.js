import * as types from './types';

export function getAcademicsRequest() {
  return {
    type: types.GET_ACADEMIC_REQUEST,
  };
}

export function getAcademicsResponse(data) {
  return {
    type: types.GET_ACADEMIC_RESPONSE,
    data,
  };
}
export function getAcademicsFailed(error) {
  return {
    type: types.GET_ACADEMIC_FAILED,
    error,
  };
}
export function addAcademicsRequest(data) {
  return {
    type: types.ADD_ACADEMIC_REQUEST,
    data,
  };
}

export function addAcademicsResponse(data) {
  return {
    type: types.ADD_ACADEMIC_RESPONSE,
    data,
  };
}
export function addAcademicsFailed(error) {
  return {
    type: types.ADD_ACADEMIC_FAILED,
    error,
  };
}

export function enableGetLoader() {
  return {
    type: types.ENABLE_GET_ACADEMIC_LOADER,
  };
}

export function disableGetLoader() {
  return {
    type: types.DISABLE_GET_ACADEMIC_LOADER,
  };
}

export function enableAddLoader() {
  return {
    type: types.ENABLE_ADD_ACADEMIC_LOADER,
  };
}

export function disableAddLoader() {
  return {
    type: types.DISABLE_ADD_ACADEMIC_LOADER,
  };
}
