import createReducer from '../../utils/createReducer';
import * as types from '../../actions/settings/users/types';

const initialState = {
  users: [],
  error: null,
};

export const usersReducer = createReducer(initialState, {
  [types.GET_USERS_REQUEST](state) {
    return {
      ...state,
      error: null,
    };
  },
  [types.GET_USERS_RESPONSE](state, action) {
    return {
      ...state,
      users: action.data,
      error: null,
    };
  },
  [types.GET_USERS_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
      users: [],
    };
  },
});
