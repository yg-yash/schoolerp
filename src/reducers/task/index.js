import createReducer from '../../utils/createReducer';
import * as types from '../../actions/task/types';

const initialState = {
  tasks: [],
  error: null,
  clearFields: false,
};

export const taskReducer = createReducer(initialState, {
  [types.GET_TASK_REQUEST](state) {
    return {
      ...state,
      error: null,
    };
  },
  [types.GET_TASK_RESPONSE](state, action) {
    return {
      ...state,
      tasks: action.data,
      error: null,
    };
  },
  [types.GET_TASK_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
    };
  },
  [types.ADD_TASK_REQUEST](state) {
    return {
      ...state,
      error: null,
      clearFields: false,
    };
  },
  [types.ADD_TASK_RESPONSE](state, action) {
    return {
      ...state,
      tasks: [...state.tasks, action.data],
      error: null,
      clearFields: true,
    };
  },
  [types.ADD_TASK_FAILED](state, action) {
    return {
      ...state,
      error: action.error,
      clearFields: false,
    };
  },
});
