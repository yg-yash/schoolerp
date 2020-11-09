import { put, call, takeEvery } from 'redux-saga/effects';
import * as batchActions from '../../../actions/batch';
import * as types from '../../../actions/batch/types';
import API from '../../../api/ApiConstants';
import axios from 'axios';

function addBatchApi(token, data) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.post(`${API.BASE_URL}/${API.BATCH}/add`, data, { headers });
}
function getCoursesBatchApi(token, id) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.get(`${API.BASE_URL}/${API.BATCH}/${id}`, { headers });
}
// function getCourseApi(token, data) {
//   const headers = { Authorization: `Bearer ${token}` };
//   return axios.get(`${API.BASE_URL}/${API.COURSE}`, { headers });
// }

function* addBatchAync(action) {
  try {
    yield put(batchActions.addEnableLoader());
    const token = yield call(getToken);
    const response = yield call(addBatchApi, token, action.data);
    yield put(batchActions.addResponse(response.data));
    yield put(batchActions.addDisableLoader());
  } catch (e) {
    console.log(e);
    yield put(batchActions.addFailed(e.response.data));
    yield put(batchActions.addDisableLoader());
  }
}

function* getCoursesBatchAsync(action) {
  try {
    const token = yield call(getToken);
    const response = yield call(getCoursesBatchApi, token, action.id);
    yield put(batchActions.getCourseBatchResponse(response.data));
  } catch (e) {
    console.log(e);
    yield put(batchActions.getCourseBatchFailed(e.response.data));
  }
}

export function* addBatchSaga() {
  yield takeEvery(types.ADD_BATCH_REQUEST, addBatchAync);
}

export function* getCoursesBatchSaga() {
  yield takeEvery(types.GET_COURSES_BATCH_REQUEST, getCoursesBatchAsync);
}

// export function* getCourseSaga() {
//   yield takeEvery(types.GET_COURSE_REQUEST, getCoursesAsync);
// }

const getToken = () => {
  return localStorage.getItem('erpToken');
};
