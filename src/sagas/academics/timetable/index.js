import { put, call, takeEvery } from 'redux-saga/effects';
import * as actions from '../../../actions/timetable';
import * as types from '../../../actions/timetable/types';
import API from '../../../api/ApiConstants';
import axios from 'axios';

function addTimetableApi(token, data) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.post(`${API.BASE_URL}/${API.TIMETABLE}/add`, data, { headers });
}
// function getCoursesBatchApi(token, id) {
//   const headers = { Authorization: `Bearer ${token}` };
//   return axios.get(`${API.BASE_URL}/${API.BATCH}/${id}`, { headers });
// }

function* addTimetableAsync(action) {
  try {
    yield put(actions.addEnableLoader());
    const token = yield call(getToken);
    const response = yield call(addTimetableApi, token, action.id);
    yield put(actions.addResponse(response.data));
    yield put(actions.addDisableLoader());
  } catch (e) {
    console.log(e);
    yield put(actions.addFailed(e.response.data));
    yield put(actions.addDisableLoader());
  }
}

export function* addTimeTableSaga() {
  yield takeEvery(types.ADD_TIMETABLE_REQUEST, addTimetableAsync);
}

const getToken = () => {
  return localStorage.getItem('erpToken');
};
