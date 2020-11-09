import { put, call, takeEvery } from 'redux-saga/effects';
import * as assignmentsActions from '../../../actions/assignments';
import * as types from '../../../actions/assignments/types';
import API from '../../../api/ApiConstants';
import axios from 'axios';

function addAssignmentApi(token, data) {
  console.log(data, 'ads');
  const headers = { Authorization: `Bearer ${token}` };
  // return axios.post(`${API.BASE_URL}/${API.NOTE}/addAssignment`, data, {
  //   headers,
  // });
}
function getAssignmentsApi(token) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.get(`${API.BASE_URL}/${API.NOTE}/assignment/`, { headers });
}

function* addAssignmentAsync(action) {
  try {
    yield put(assignmentsActions.addEnableLoader());
    const token = yield call(getToken);
    const response = yield call(addAssignmentApi, token, action.data);
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

export function* addAssignmentSaga() {
  yield takeEvery(types.ADD_ASSIGNMENTS_REQUEST, addAssignmentAsync);
}

export function* getAssignmentsSaga() {
  yield takeEvery(types.GET_ASSIGNMENTS_REQUEST, getAssignmentsAsync);
}

// export function* getCourseSaga() {
//   yield takeEvery(types.GET_COURSE_REQUEST, getCoursesAsync);
// }

const getToken = () => {
  return localStorage.getItem('erpToken');
};
