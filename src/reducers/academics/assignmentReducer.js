import createReducer from '../../utils/createReducer';
import * as types from '../../actions/assignments/types';

const initialState = {
  error: null,
  list: [],
};

export const assignmentReducer = createReducer(initialState, {
  [types.ADD_ASSIGNMENTS_REQUEST](state) {
    return {
      ...state,
      error: null,
    };
  },
  [types.ADD_ASSIGNMENTS_RESPONSE](state, action) {
    return {
      ...state,
      error: null,
      list: [...state.list, action.data],
    };
  },
  [types.ADD_ASSIGNMENTS_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
    };
  },
  [types.GET_ASSIGNMENTS_REQUEST](state) {
    return {
      ...state,
      error: null,
    };
  },
  [types.GET_ASSIGNMENTS_RESPONSE](state, action) {
    return {
      ...state,
      error: null,
      list: action.data,
    };
  },
  [types.GET_ASSIGNMENTS_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
    };
  },
});
