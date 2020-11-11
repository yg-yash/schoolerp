import * as types from './types';

export function addRequest(data) {
  return {
    type: types.ADD_EMPLOYEE_REQUEST,
    data,
  };
}

export function addResponse(data) {
  return {
    type: types.ADD_EMPLOYEE_RESPONSE,
    data,
  };
}

export function addFailed(error) {
  return {
    type: types.ADD_EMPLOYEE_FAILED,
    error,
  };
}
export function getRequest() {
  return {
    type: types.GET_EMPLOYEES_REQUEST,
  };
}

export function getResponse(data) {
  return {
    type: types.GET_EMPLOYEES_RESPONSE,
    data,
  };
}

export function getFailed(error) {
  return {
    type: types.GET_EMPLOYEES_FAILED,
    error,
  };
}
export function getEmployeeByDepartmentRequest(id) {
  return {
    type: types.GET_EMPLOYEE_BY_DEPARTMENTS_REQUEST,
    id,
  };
}

export function getEmployeeByDepartmentResponse(data) {
  return {
    type: types.GET_EMPLOYEE_BY_DEPARTMENTS_RESPONSE,
    data,
  };
}

export function getEmployeeByDepartmentFailed(error) {
  return {
    type: types.GET_EMPLOYEE_BY_DEPARTMENTS_FAILED,
    error,
  };
}

export function addEnableLoader() {
  return {
    type: types.ENABLE_ADD_EMPLOYEE_LOADER,
  };
}
export function addDisableLoader() {
  return {
    type: types.DISABLE_ADD_EMPLOYEE_LOADER,
  };
}

// export function getEnableLoader() {
//   return {
//     type: types.ENABLE_GET_COURSE_LOADER,
//   };
// }
// export function getDisableLoader() {
//   return {
//     type: types.DISABLE_GET_COURSE_LOADER,
//   };
// }
