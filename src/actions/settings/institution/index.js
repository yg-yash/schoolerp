import * as types from './types';

export function getInstitutionRequest() {
  return {
    type: types.GET_INSTITUTION_REQUEST,
  };
}

export function getInstitutionResponse(data) {
  return {
    type: types.GET_INSTITUTION_RESPONSE,
    data,
  };
}
export function getInstitutionFailed(error) {
  return {
    type: types.GET_INSTITUTION_FAILED,
    error,
  };
}
export function addInstitutionRequest(data) {
  return {
    type: types.ADD_INSTITUTION_REQUEST,
    data,
  };
}

export function addInstitutionResponse(data) {
  return {
    type: types.ADD_INSTITUTION_RESPONSE,
    data,
  };
}
export function addInstitutionFailed(error) {
  return {
    type: types.ADD_INSTITUTION_FAILED,
    error,
  };
}

export function enableGetLoader() {
  return {
    type: types.ENABLE_GET_INSTITUTION_LOADER,
  };
}

export function disableGetLoader() {
  return {
    type: types.DISABLE_GET_INSTITUTION_LOADER,
  };
}

export function enableAddLoader() {
  return {
    type: types.ENABLE_ADD_INSTITUTION_LOADER,
  };
}

export function disableAddLoader() {
  return {
    type: types.DISABLE_ADD_INSTITUTION_LOADER,
  };
}
