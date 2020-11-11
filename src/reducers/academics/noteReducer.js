import createReducer from '../../utils/createReducer';
import * as types from '../../actions/notes/types';

const initialState = {
  error: null,
  list: [],
};

export const noteReducer = createReducer(initialState, {
  [types.ADD_NOTE_REQUEST](state) {
    return {
      ...state,
      error: null,
    };
  },
  [types.ADD_NOTE_RESPONSE](state, action) {
    return {
      ...state,
      error: null,
      list: [...state.list, action.data],
    };
  },
  [types.ADD_NOTE_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
    };
  },
  [types.GET_NOTE_REQUEST](state) {
    return {
      ...state,
      error: null,
    };
  },
  [types.GET_NOTE_RESPONSE](state, action) {
    console.log('rember', action.data);
    return {
      ...state,
      error: null,
      list: action.data,
    };
  },
  [types.GET_NOTE_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
    };
  },
});
