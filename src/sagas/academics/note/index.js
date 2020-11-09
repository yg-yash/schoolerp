import { put, call, takeEvery } from 'redux-saga/effects';
import * as assignmentsActions from '../../../actions/notes';
import * as types from '../../../actions/notes/types';
import API from '../../../api/ApiConstants';
import axios from 'axios';

function addAssignmentApi(token, data) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.post(`${API.BASE_URL}/${API.NOTE}/add`, data, { headers });
}
function getAssignmentsApi(token) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.get(`${API.BASE_URL}/${API.NOTE}`, { headers });
}

function* addAssignmentAsync(action) {
  try {
    yield put(assignmentsActions.addEnableLoader());
    const token = yield call(getToken);
    const response = yield call(addAssignmentApi, token, action.id);
    yield put(assignmentsActions.addResponse(response.data));
    yield put(assignmentsActions.addDisableLoader());
  } catch (e) {
    console.log(e);
    yield put(assignmentsActions.addFailed(e.response.data));
    yield put(assignmentsActions.addDisableLoader());
  }
}

function* getAssignmentsAsync() {
  try {
    const token = yield call(getToken);
    const response = yield call(getAssignmentsApi, token);
    yield put(assignmentsActions.getResponse(response.data));
  } catch (e) {
    yield put(assignmentsActions.getFailed(e.response.data));
  }
}

export function* addNoteSaga() {
  yield takeEvery(types.ADD_NOTE_REQUEST, addAssignmentAsync);
}

export function* getNoteSaga() {
  yield takeEvery(types.GET_NOTE_REQUEST, getAssignmentsAsync);
}

const getToken = () => {
  return localStorage.getItem('erpToken');
};
