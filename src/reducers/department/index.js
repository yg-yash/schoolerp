import createReducer from '../../utils/createReducer';
import * as types from '../../actions/departments/types';

const initialState = {
  list: [],
  error: null,
  clearFields: false,
};

export const departmentReducer = createReducer(initialState, {
  [types.GET_DEPARTMENT_REQUEST](state) {
    return {
      ...state,
      error: null,
    };
  },
  [types.GET_DEPARTMENT_RESPONSE](state, action) {
    return {
      ...state,
      list: action.response,
      error: null,
    };
  },
  [types.GET_DEPARTMENT_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
    };
  },
  [types.ADD_DEPARTMENT_REQUEST](state) {
    return {
      ...state,
      error: null,
      clearFields: false,
    };
  },
  [types.ADD_DEPARTMENT_RESPONSE](state, action) {
    return {
      ...state,
      list: [...state.list, action.response],
      error: null,
      clearFields: true,
    };
  },
  [types.ADD_DEPARTMENT_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
      clearFields: false,
    };
  },
});
