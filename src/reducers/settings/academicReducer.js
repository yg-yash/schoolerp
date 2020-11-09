import createReducer from '../../utils/createReducer';
import * as types from '../../actions/settings/academic/types';

const initialState = {
  list: [],
  error: null,
};

export const academicReducer = createReducer(initialState, {
  [types.GET_ACADEMIC_REQUEST](state) {
    return {
      ...state,
      error: null,
    };
  },
  [types.GET_ACADEMIC_RESPONSE](state, action) {
    return {
      ...state,
      list: action.data,
      error: null,
    };
  },
  [types.GET_ACADEMIC_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
      list: [],
    };
  },
  [types.ADD_ACADEMIC_REQUEST](state) {
    return {
      ...state,
      error: null,
    };
  },
  [types.ADD_ACADEMIC_RESPONSE](state, action) {
    return {
      ...state,
      list: [...state.list, action.data],
      error: null,
    };
  },
  [types.ADD_ACADEMIC_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
    };
  },
});
