import createReducer from '../../utils/createReducer';
import * as types from '../../actions/settings/institution/types';

const initialState = {
  list: [],
  error: null,
};

export const institutionReducer = createReducer(initialState, {
  [types.GET_INSTITUTION_REQUEST](state) {
    return {
      ...state,
      error: null,
    };
  },
  [types.GET_INSTITUTION_RESPONSE](state, action) {
    return {
      ...state,
      list: action.data,
      error: null,
    };
  },
  [types.GET_INSTITUTION_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
      list: [],
    };
  },
  [types.ADD_INSTITUTION_REQUEST](state) {
    return {
      ...state,
      error: null,
    };
  },
  [types.ADD_INSTITUTION_RESPONSE](state, action) {
    return {
      ...state,
      list: [...state.list, action.data],
      error: null,
    };
  },
  [types.ADD_INSTITUTION_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
    };
  },
});
