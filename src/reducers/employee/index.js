import createReducer from '../../utils/createReducer';
import * as types from '../../actions/employee/types';

const initialState = {
  error: null,
  list: [],
  successMessage: '',
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
  //   [types.GET_COURSE_REQUEST](state) {
  //     return {
  //       ...state,
  //       error: null,
  //     };
  //   },
  //   [types.GET_COURSE_RESPONSE](state, action) {
  //     return {
  //       ...state,
  //       error: null,
  //       courses: action.data,
  //     };
  //   },
  //   [types.GET_COURSE_FAILED](state, action) {
  //     return {
  //       ...state,
  //       error: action.error,
  //     };
  //   },
});
