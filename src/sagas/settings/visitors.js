import { put, call, takeEvery } from 'redux-saga/effects';
import * as academicActions from '../../actions/settings/visitors';
import * as types from '../../actions/settings/visitors/types';
import API from '../../api/ApiConstants';
import axios from 'axios';

function getApi(token, id) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.get(`${API.BASE_URL}/${API.VISITORS}`, { headers });
}

function addApi(token, data) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.post(`${API.BASE_URL}/${API.VISITORS}/${data}`, { headers });
}

function* getAsync(action) {
  try {
    const token = yield call(getToken);
    const response = yield call(getApi, token, action.id);
    yield put(academicActions.getResponse(response.data));
  } catch (e) {
    console.log(e);
    yield put(academicActions.getFailed(e.response.data));
  }
}
function* addAsync(action, data) {
  try {
    const token = yield call(getToken);
    const response = yield call(addApi, token, action.data);
    yield put(academicActions.addResponse(response.data));
  } catch (e) {
    console.log(e);
    yield put(academicActions.addFailed(e.response.data));
  }
}

export function* getVisitorsSaga() {
  yield takeEvery(types.GET_VISITORS_REQUEST, getAsync);
}

export function* addVisitorsSaga() {
  yield takeEvery(types.ADD_VISITORS_REQUEST, addAsync);
}

const getToken = () => {
  return localStorage.getItem('erpToken');
};
