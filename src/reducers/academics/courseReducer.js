import createReducer from '../../utils/createReducer';
import * as types from '../../actions/course/types';

const initialState = {
  error: null,
  courses: [],
};

export const couseReducer = createReducer(initialState, {
  [types.ADD_COURSE_REQUEST](state) {
    return {
      ...state,
      error: null,
    };
  },
  [types.ADD_COURSE_RESPONSE](state, action) {
    return {
      ...state,
      error: null,
    };
  },
  [types.ADD_COURSE_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
    };
  },
  [types.GET_COURSE_REQUEST](state) {
    return {
      ...state,
      error: null,
    };
  },
  [types.GET_COURSE_RESPONSE](state, action) {
    return {
      ...state,
      error: null,
      courses: action.data,
    };
  },
  [types.GET_COURSE_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
    };
  },
});
