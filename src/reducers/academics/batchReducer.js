import createReducer from '../../utils/createReducer';
import * as types from '../../actions/batch/types';

const initialState = {
  error: null,
  batches: [],
  coursesBatch:[]
};

export const batchReducer = createReducer(initialState, {
  [types.ADD_BATCH_REQUEST](state) {
    return {
      ...state,
      error: null,
    };
  },
  [types.ADD_BATCH_RESPONSE](state, action) {
    return {
      ...state,
      error: null,
    };
  },
  [types.ADD_BATCH_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
    };
  },
  [types.GET_COURSES_BATCH_REQUEST](state) {
    return {
      ...state,
      error: null,
    };
  },
  [types.GET_COURSES_BATCH_RESPONSE](state, action) {
    return {
      ...state,
      error: null,
      coursesBatch:action.data
    };
  },
  [types.GET_COURSES_BATCH_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
    };
  },
  // [types.GET_COURSE_REQUEST](state) {
  //   return {
  //     ...state,
  //     error: null,
  //   };
  // },
  // [types.GET_COURSE_RESPONSE](state, action) {
  //   return {
  //     ...state,
  //     error: null,
  //     courses: action.data,
  //   };
  // },
  // [types.GET_COURSE_FAILED](state, action) {
  //   return {
  //     ...state,
  //     error: action.error,
  //   };
  // },
});
