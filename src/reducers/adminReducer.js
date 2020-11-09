import createReducer from '../utils/createReducer';
import * as types from '../actions/admin/types';

const initialState = {
  admin: null,
  error: null,
};

export const adminReducer = createReducer(initialState, {
  [types.GET_ADMIN_REQUEST](state) {
    return {
      ...state,
      error: null,
    };
  },
  [types.GET_ADMIN_RESPONSE](state, action) {
    return {
      ...state,
      admin: action.data,
      error: null,
    };
  },
  [types.GET_ADMIN_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
    };
  },
});
