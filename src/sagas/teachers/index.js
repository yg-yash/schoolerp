import { put, call, takeEvery } from 'redux-saga/effects';
import * as actions from '../../actions/teachers';
import * as types from '../../actions/teachers/types';
import API from '../../api/ApiConstants';
import axios from 'axios';

function getApi(token) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.get(`${API.BASE_URL}/${API.TEACHER}`, { headers });
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

export function* getTeachersSaga() {
  yield takeEvery(types.GET_TEACHERS_REQUEST, getAsync);
}
const getToken = () => {
  return localStorage.getItem('erpToken');
};
