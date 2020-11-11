import { put, call, takeEvery } from 'redux-saga/effects';
import * as actions from '../../actions/departments';
import * as types from '../../actions/departments/types';
import API from '../../api/ApiConstants';
import axios from 'axios';

function getApi(token) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.get(`${API.BASE_URL}/${API.DEPARTMENT}`, { headers });
}
function addApi(token, data) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.post(`${API.BASE_URL}/${API.DEPARTMENT}`, data, { headers });
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

export function* getDepartmentSaga() {
  yield takeEvery(types.GET_DEPARTMENT_REQUEST, getAsync);
}

export function* addDepartmentSaga() {
  yield takeEvery(types.ADD_DEPARTMENT_REQUEST, addAsync);
}

const getToken = () => {
  return localStorage.getItem('erpToken');
};
