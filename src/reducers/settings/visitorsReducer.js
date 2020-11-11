import createReducer from '../../utils/createReducer';
import * as types from '../../actions/settings/visitors/types';

const initialState = {
  visitors: [],
  error: null,
};

export const visitorsReducer = createReducer(initialState, {
  [types.GET_VISITORS_REQUEST](state) {
    return {
      ...state,
      error: null,
    };
  },
  [types.GET_VISITORS_RESPONSE](state, action) {
    return {
      ...state,
      visitors: action.data,
      error: null,
    };
  },
  [types.GET_VISITORS_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
    };
  },
  [types.ADD_VISITORS_REQUEST](state) {
    return {
      ...state,
      error: null,
    };
  },
  [types.ADD_VISITORS_RESPONSE](state, action) {
    return {
      ...state,
      visitors: [...state.visitors, action.data],
      error: null,
    };
  },
  [types.ADD_VISITORS_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
    };
  },
});
