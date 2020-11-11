import { put, call, takeEvery } from 'redux-saga/effects';
import * as actions from '../../../actions/timetable';
import * as types from '../../../actions/timetable/types';
import API from '../../../api/ApiConstants';
import axios from 'axios';

function addTimetableApi(token, data) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.post(`${API.BASE_URL}/${API.TIMETABLE}/add`, data, { headers });
}
function getApi(token) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.get(`${API.BASE_URL}/${API.TIMETABLE}`, { headers });
}
function getNamesApi(token, courseId, bacthId) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.get(
    `${API.BASE_URL}/${API.TIMETABLE}/names/${courseId}/${bacthId}`,
    { headers }
  );
}

function* addTimetableAsync(action) {
  try {
    yield put(actions.addEnableLoader());
    const token = yield call(getToken);
    const response = yield call(addTimetableApi, token, action.data);
    yield put(actions.addResponse(response.data));
    yield put(actions.addDisableLoader());
  } catch (e) {
    console.log(e);
    yield put(actions.addFailed(e.response.data));
    yield put(actions.addDisableLoader());
  }
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
function* getNamesAsync(action) {
  try {
    const token = yield call(getToken);
    const response = yield call(
      getNamesApi,
      token,
      action.courseId,
      action.batchId
    );
    yield put(actions.getNamesResponse(response.data));
  } catch (e) {
    console.log(e);
    yield put(actions.getNamesFailed(e.response.data));
  }
}

export function* addTimeTableSaga() {
  yield takeEvery(types.ADD_TIMETABLE_REQUEST, addTimetableAsync);
}
export function* getTimetableSaga() {
  yield takeEvery(types.GET_TIMETABLE_REQUEST, getAsync);
}

export function* getTimetableNamesSaga() {
  yield takeEvery(types.GET_TIMETABLE_NAMES_REQUEST, getNamesAsync);
}

const getToken = () => {
  return localStorage.getItem('erpToken');
};
