import createReducer from '../../utils/createReducer';
import * as types from '../../actions/employee/types';

const initialState = {
  error: null,
  list: [],
  successMessage: '',
  employeesByDepartment: [],
};

export const employeeReducer = createReducer(initialState, {
  [types.ADD_EMPLOYEE_REQUEST](state) {
    return {
      ...state,
      error: null,
      successMessage: '',
    };
  },
  [types.ADD_EMPLOYEE_RESPONSE](state, action) {
    return {
      ...state,
      error: null,
      list: [...state.list, action.data],
      successMessage: 'Employee Added!',
    };
  },
  [types.ADD_EMPLOYEE_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
      successMessage: '',
    };
  },
  [types.GET_EMPLOYEES_REQUEST](state) {
    return {
      ...state,
      error: null,
    };
  },
  [types.GET_EMPLOYEES_RESPONSE](state, action) {
    return {
      ...state,
      error: null,
      list: action.data,
    };
  },
  [types.GET_EMPLOYEES_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
    };
  },
  [types.GET_EMPLOYEE_BY_DEPARTMENTS_REQUEST](state) {
    return {
      ...state,
      error: null,
    };
  },
  [types.GET_EMPLOYEE_BY_DEPARTMENTS_RESPONSE](state, action) {
    return {
      ...state,
      error: null,
      employeesByDepartment: action.data,
    };
  },
  [types.GET_EMPLOYEE_BY_DEPARTMENTS_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
    };
  },
});
