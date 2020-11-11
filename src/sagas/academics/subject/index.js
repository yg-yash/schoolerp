import { put, call, takeEvery } from 'redux-saga/effects';
import * as subjectActions from '../../../actions/academic/subjects';
import * as types from '../../../actions/academic/subjects/types';
import API from '../../../api/ApiConstants';
import axios from 'axios';

function addSubjectApi(token, data) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.post(`${API.BASE_URL}/${API.SUBJECT}/add`, data, { headers });
}

function assignSubjectApi(token, data) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.post(`${API.BASE_URL}/${API.SUBJECT}/assign`, data, {
    headers,
  });
}

function getSpecificApi(token, courseId, batchId) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.get(
    `${API.BASE_URL}/${API.SUBJECT}/specific/${courseId}/${batchId}`,
    {
      headers,
    }
  );
}
function getSubjectsApi(token) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.get(`${API.BASE_URL}/${API.SUBJECT}`, {
    headers,
  });
}
function allocateSubjectsApi(token, data) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.post(`${API.BASE_URL}/${API.SUBJECT}/allocate`, data, {
    headers,
  });
}

function* addSubjectAsync(action) {
  try {
    yield put(subjectActions.addEnableLoader());
    const token = yield call(getToken);
    const response = yield call(addSubjectApi, token, action.data);
    yield put(subjectActions.addResponse(response.data));
    yield put(subjectActions.addDisableLoader());
  } catch (e) {
    console.log(e);
    yield put(subjectActions.addFailed(e.response.data));
    yield put(subjectActions.addDisableLoader());
  }
}

function* assignSubjectAsync(action) {
  try {
    yield put(subjectActions.assignEnableLoader());
    const token = yield call(getToken);
    const response = yield call(assignSubjectApi, token, action.data);
    yield put(subjectActions.assignResponse(response.data));
    yield put(subjectActions.assignDisableLoader());
  } catch (e) {
    console.log(e);
    yield put(subjectActions.assignFailed(e.response.data));
    yield put(subjectActions.assignDisableLoader());
  }
}

function* getSpecificAsync(action) {
  try {
    const token = yield call(getToken);
    const response = yield call(
      getSpecificApi,
      token,
      action.courseId,
      action.batchId
    );
    yield put(subjectActions.getCourseBatchResponse(response.data));
  } catch (e) {
    console.log(e);
    yield put(subjectActions.getCourseBatchFailed(e.response.data));
  }
}

function* getSubjectsAsync() {
  try {
    const token = yield call(getToken);
    const response = yield call(getSubjectsApi, token);
    yield put(subjectActions.getResponse(response.data));
  } catch (e) {
    console.log(e);
    yield put(subjectActions.getFailed(e.response.data));
  }
}
function* allocateSubjectsAsync(action) {
  try {
    const token = yield call(getToken);
    const response = yield call(allocateSubjectsApi, token);
    yield put(subjectActions.allocateResponse(response.data, action.data));
  } catch (e) {
    console.log(e);
    yield put(subjectActions.allocateFailed(e.response.data));
  }
}

export function* addSubjectSaga() {
  yield takeEvery(types.ADD_SUBJECT_REQUEST, addSubjectAsync);
}
export function* assignSubjectSaga() {
  yield takeEvery(types.ASSIGN_SUBJECT_REQUEST, assignSubjectAsync);
}

export function* getSpecificSaga() {
  yield takeEvery(types.GET_COURSE_BATCH_SUBJECT_REQUEST, getSpecificAsync);
}
export function* getSubjectsSaga() {
  yield takeEvery(types.GET_ALL_SUBJECTS_REQUEST, getSubjectsAsync);
}
export function* allocateSubjectsSaga() {
  yield takeEvery(types.ALLOCATE_SUBJECT_REQUEST, allocateSubjectsAsync);
}

const getToken = () => {
  return localStorage.getItem('erpToken');
};
