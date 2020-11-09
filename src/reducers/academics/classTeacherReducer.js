import createReducer from '../../utils/createReducer';
import * as types from '../../actions/classTeacher/types';

const initialState = {
  error: null,
  successMessage: '',
};

export const classTeacherReducer = createReducer(initialState, {
  [types.ADD_CLASS_TEACHER_REQUEST](state) {
    return {
      ...state,
      error: null,
      successMessage: '',
    };
  },
  [types.ADD_CLASS_TEACHER_RESPONSE](state, action) {
    return {
      ...state,
      error: null,
      successMessage: 'Class Teacher Added',
    };
  },
  [types.ADD_CLASS_TEACHER_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
      successMessage: '',
    };
  },
  //   [types.GET_CLASS_TEACHER_REQUEST](state) {
  //     return {
  //       ...state,
  //       error: null,
  //     };
  //   },
  //   [types.GET_CLASS_TEACHER_RESPONSE](state, action) {
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
