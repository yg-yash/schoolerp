import createReducer from '../../utils/createReducer';
import * as types from '../../actions/academic/subjects/types';

const initialState = {
  error: '',
  subjects: [],
  specificSubjects: [],
};

export const subjectReducer = createReducer(initialState, {
  [types.ADD_SUBJECT_REQUEST](state) {
    return {
      ...state,
      error: '',
    };
  },
  [types.ADD_SUBJECT_RESPONSE](state, action) {
    return {
      ...state,
      error: '',
      subjects: [...state.subjects, action.data],
    };
  },
  [types.ADD_SUBJECT_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
    };
  },
  [types.GET_COURSE_BATCH_SUBJECT_REQUEST](state) {
    return {
      ...state,
      error: '',
    };
  },
  [types.GET_COURSE_BATCH_SUBJECT_RESPONSE](state, action) {
    return {
      ...state,
      error: '',
      specificSubjects: action.data,
    };
  },
  [types.GET_COURSE_BATCH_SUBJECT_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
    };
  },
  [types.GET_ALL_SUBJECTS_REQUEST](state) {
    return {
      ...state,
      error: '',
    };
  },
  [types.GET_ALL_SUBJECTS_RESPONSE](state, action) {
    return {
      ...state,
      error: '',
      subjects: action.data,
    };
  },
  [types.GET_ALL_SUBJECTS_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
    };
  },
});
