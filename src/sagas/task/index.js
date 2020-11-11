import { put, call, takeEvery } from 'redux-saga/effects';
import * as actions from '../../actions/task';
import * as types from '../../actions/task/types';
import API from '../../api/ApiConstants';
import axios from 'axios';

function getApi(token) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.get(`${API.BASE_URL}/${API.TASK}`, { headers });
}
function addApi(token, data) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.post(`${API.BASE_URL}/${API.TASK}`, data, { headers });
}

function* getAsync() {
  try {
    const token = yield call(getToken);
    const response = yield call(getApi, token);
    yield put(actions.getResponse(response.data));
  } catch (e) {
    console.log(e);
    yield put(actions.getFailed(e.response.data));
  }
}
function* addAsync(action) {
  try {
    yield put(actions.addEnableLoader());
    const token = yield call(getToken);
    const response = yield call(addApi, token, action.name);
    yield put(actions.addResponse(response.data));
    yield put(actions.addDisableLoader());
  } catch (e) {
    console.log(e);
    yield put(actions.addFailed(e.response.data));
    yield put(actions.addDisableLoader());
  }
}

export function* getTaskSaga() {
  yield takeEvery(types.GET_TASK_REQUEST, getAsync);
}

export function* addTaskSaga() {
  yield takeEvery(types.ADD_TASK_REQUEST, addAsync);
}

const getToken = () => {
  return localStorage.getItem('erpToken');
};
