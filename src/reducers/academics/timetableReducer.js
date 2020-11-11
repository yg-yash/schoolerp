import createReducer from '../../utils/createReducer';
import * as types from '../../actions/timetable/types';

const initialState = {
  error: '',
  timetable: [],
};

export const timetableReducer = createReducer(initialState, {
  [types.ADD_TIMETABLE_REQUEST](state) {
    return {
      ...state,
      error: '',
    };
  },
  [types.ADD_TIMETABLE_RESPONSE](state, action) {
    return {
      ...state,
      error: '',
      timetable: [...state.timetable, action.data],
    };
  },
  [types.ADD_TIMETABLE_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
    };
  },

  [types.GET_TIMETABLE_REQUEST](state) {
    return {
      ...state,
      error: '',
    };
  },
  [types.GET_TIMETABLE_RESPONSE](state, action) {
    return {
      ...state,
      error: '',
      timetable: action.data,
    };
  },
  [types.GET_TIMETABLE_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
    };
  },
  [types.GET_TIMETABLE_NAMES_REQUEST](state) {
    return {
      ...state,
      error: '',
    };
  },
  [types.GET_TIMETABLE_NAMES_RESPONSE](state, action) {
    return {
      ...state,
      error: '',
      timetable: action.data,
    };
  },
  [types.GET_TIMETABLE_NAMES_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
    };
  },
});
