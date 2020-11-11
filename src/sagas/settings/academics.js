import { put, call, takeEvery } from 'redux-saga/effects';
import * as academicActions from '../../actions/settings/academic';
import * as types from '../../actions/settings/academic/types';
import API from '../../api/ApiConstants';
import axios from 'axios';

function getAcademicsApi(token) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.get(`${API.BASE_URL}/${API.ACADEMIC}`, { headers });
}
function addAcademicsApi(token, data) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.post(`${API.BASE_URL}/${API.ACADEMIC}/add`, data, { headers });
}

function* getAcademicsAsync() {
  try {
    const token = yield call(getToken);
    const response = yield call(getAcademicsApi, token);

    yield put(academicActions.getAcademicsResponse(response.data));
  } catch (e) {
    console.log(e);
    yield put(academicActions.getAcademicsFailed(e.response.data));
  }
}
function* addAcademicsAsync(action) {
  try {
    yield put(academicActions.enableAddLoader());
    const token = yield call(getToken);
    const response = yield call(addAcademicsApi, token, action.data);
    yield put(academicActions.addAcademicsResponse(response.data));
    yield put(academicActions.disableAddLoader());
  } catch (e) {
    console.log(e);
    yield put(academicActions.addAcademicsFailed(e.response.data));
    yield put(academicActions.disableAddLoader());
  }
}

export function* getAcademicsSaga() {
  yield takeEvery(types.GET_ACADEMIC_REQUEST, getAcademicsAsync);
}

export function* addAcademicsSaga() {
  yield takeEvery(types.ADD_ACADEMIC_REQUEST, addAcademicsAsync);
}

const getToken = () => {
  return localStorage.getItem('erpToken');
};
