import createReducer from '../../utils/createReducer';
import * as types from '../../actions/userType/types';

const initialState = {
  userTypes: [],
  error: null,
  clearFields: false,
};

export const usertypeReducer = createReducer(initialState, {
  [types.GET_USER_TYPE_REQUEST](state) {
    return {
      ...state,
      error: null,
    };
  },
  [types.GET_USER_TYPE_RESPONSE](state, action) {
    return {
      ...state,
      userTypes: action.response,
      error: null,
    };
  },
  [types.GET_USER_TYPE_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
    };
  },
  [types.ADD_USER_TYPE_REQUEST](state) {
    return {
      ...state,
      error: null,
      clearFields: false,
    };
  },
  [types.ADD_USER_TYPE_RESPONSE](state, action) {
    return {
      ...state,
      userTypes: [...state.userTypes, action.response],
      error: null,
      clearFields: true,
    };
  },
  [types.ADD_USER_TYPE_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
      clearFields: false,
    };
  },
});
