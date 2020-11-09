import { put, call, takeEvery } from 'redux-saga/effects';
import * as courseActions from '../../../actions/course';
import * as types from '../../../actions/course/types';
import API from '../../../api/ApiConstants';
import axios from 'axios';

function addCourseApi(token, data) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.post(`${API.BASE_URL}/${API.COURSE}/add`, data, { headers });
}
function getCourseApi(token, data) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.get(`${API.BASE_URL}/${API.COURSE}`, { headers });
}

function* addCourseAync(action) {
  try {
    yield put(courseActions.addEnableLoader());
    const token = yield call(getToken);
    const response = yield call(addCourseApi, token, action.data);
    yield put(courseActions.addResponse(response.data));
    yield put(courseActions.addDisableLoader());
  } catch (e) {
    console.log(e);
    yield put(courseActions.addFailed(e.response.data));
    yield put(courseActions.addDisableLoader());
  }
}
function* getCoursesAsync() {
  try {
    yield put(courseActions.getEnableLoader());
    const token = yield call(getToken);
    const response = yield call(getCourseApi, token);
    yield put(courseActions.getResponse(response.data));
    yield put(courseActions.getDisableLoader());
  } catch (e) {
    console.log(e);
    yield put(courseActions.getFailed(e.response.data));
    yield put(courseActions.getDisableLoader());
  }
}

export function* addCourseSaga() {
  yield takeEvery(types.ADD_COURSE_REQUEST, addCourseAync);
}

export function* getCourseSaga() {
  yield takeEvery(types.GET_COURSE_REQUEST, getCoursesAsync);
}

const getToken = () => {
  return localStorage.getItem('erpToken');
};
