import { put, call, takeEvery } from 'redux-saga/effects';
import * as actions from '../../../actions/classTeacher';
import * as types from '../../../actions/classTeacher/types';
import API from '../../../api/ApiConstants';
import axios from 'axios';

function addApi(token, data) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.post(`${API.BASE_URL}/${API.CLASSTEACHER}/add`, data, {
    headers,
  });
}
// function getAssignmentsApi(token) {
//   const headers = { Authorization: `Bearer ${token}` };
//   return axios.get(`${API.BASE_URL}/${API.NOTE}`, { headers });
// }

function* addClassTeacherAsync(action) {
  try {
    yield put(actions.addEnableLoader());
    const token = yield call(getToken);
    const response = yield call(addApi, token, action.data);
    yield put(actions.addResponse(response.data));
    yield put(actions.addDisableLoader());
  } catch (e) {
    console.log(e);
    yield put(actions.addFailed(e.response.data));
    yield put(actions.addDisableLoader());
  }
}

// function* getAssignmentsAsync() {
//   try {
//     const token = yield call(getToken);
//     const response = yield call(getAssignmentsApi, token);
//     yield put(actions.getResponse(response.data));
//   } catch (e) {
//     yield put(actions.getFailed(e.response.data));
//   }
// }

export function* addClassTeacherSaga() {
  yield takeEvery(types.ADD_CLASS_TEACHER_REQUEST, addClassTeacherAsync);
}

// export function* getNoteSaga() {
//   yield takeEvery(types.GET_NOTE_REQUEST, getAssignmentsAsync);
// }

const getToken = () => {
  return localStorage.getItem('erpToken');
};
