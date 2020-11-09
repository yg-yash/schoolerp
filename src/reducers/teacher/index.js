import createReducer from '../../utils/createReducer';
import * as types from '../../actions/teachers/types';

const initialState = {
  teachers: [],
  error: null,
};

export const teacherReducer = createReducer(initialState, {
  [types.GET_TEACHERS_REQUEST](state) {
    return {
      ...state,
      error: null,
    };
  },
  [types.GET_TEACHERS_RESPONSE](state, action) {
    return {
      ...state,
      teachers: action.data,
      error: null,
    };
  },
  [types.GET_TEACHERS_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
    };
  },
});
