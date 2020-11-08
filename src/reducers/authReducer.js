/* Login Reducer
 * handles login states in the app
 */
import createReducer from '../utils/createReducer';
import * as types from '../actions/auth/types';

const initialState = {
  isLoggedIn: false,
  id: 0,
  user: null,
  error: null,
};

export const loginReducer = createReducer(initialState, {
  [types.LOGIN_REQUEST](state) {
    return {
      ...state,
      error: null,
    };
  },
  [types.LOGIN_RESPONSE](state, action) {
    return {
      ...state,
      user: null,
      isLoggedIn: true,
      error: null,
    };
  },
  [types.LOGIN_FAILED](state, action) {
    return {
      ...state,
      isLoggedIn: false,
      error: action.error,
    };
  },
  [types.LOG_OUT](state) {
    return {
      ...state,
      isLoggedIn: false,
    };
  },
});
