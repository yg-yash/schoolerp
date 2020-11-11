import * as types from './types';

export function addRequest(data) {
  return {
    type: types.ADD_SUBJECT_REQUEST,
    data,
  };
}

export function addResponse(data) {
  return {
    type: types.ADD_SUBJECT_RESPONSE,
    data,
  };
}

export function addFailed(error) {
  return {
    type: types.ADD_SUBJECT_FAILED,
    error,
  };
}

export function addEnableLoader() {
  return {
    type: types.ENABLE_ADD_SUBJECT_LOADER,
  };
}
export function addDisableLoader() {
  return {
    type: types.DISABLE_ADD_SUBJECT_LOADER,
  };
}
export function assignRequest(data) {
  return {
    type: types.ASSIGN_SUBJECT_REQUEST,
    data,
  };
}

export function assignResponse(data) {
  return {
    type: types.ASSIGN_SUBJECT_RESPONSE,
    data,
  };
}

export function assignFailed(error) {
  return {
    type: types.ASSIGN_SUBJECT_FAILED,
    error,
  };
}

export function assignEnableLoader() {
  return {
    type: types.ENABLE_ASSIGN_SUBJECT_LOADER,
  };
}
export function assignDisableLoader() {
  return {
    type: types.DISABLE_ASSIGN_SUBJECT_LOADER,
  };
}

export function getCourseBatchRequest(courseId, batchId) {
  return {
    type: types.GET_COURSE_BATCH_SUBJECT_REQUEST,
    courseId,
    batchId,
  };
}

export function getCourseBatchResponse(data) {
  return {
    type: types.GET_COURSE_BATCH_SUBJECT_RESPONSE,
    data,
  };
}

export function getCourseBatchFailed(error) {
  return {
    type: types.GET_COURSE_BATCH_SUBJECT_FAILED,
    error,
  };
}
export function getRequest() {
  return {
    type: types.GET_ALL_SUBJECTS_REQUEST,
  };
}

export function getResponse(data) {
  return {
    type: types.GET_ALL_SUBJECTS_RESPONSE,
    data,
  };
}

export function getFailed(error) {
  return {
    type: types.GET_ALL_SUBJECTS_FAILED,
    error,
  };
}
export function allocateRequest(data) {
  return {
    type: types.ALLOCATE_SUBJECT_REQUEST,
    data,
  };
}

export function allocateResponse(data) {
  return {
    type: types.ALLOCATE_SUBJECT_RESPONSE,
    data,
  };
}

export function allocateFailed(error) {
  return {
    type: types.ALLOCATE_SUBJECT_FAILED,
    error,
  };
}
