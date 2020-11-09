import { put, call, takeEvery } from 'redux-saga/effects';
import * as adminActions from '../../actions/admin';
import * as types from '../../actions/admin/types';
import API from '../../api/ApiConstants';
import axios from 'axios';

function getAdminApi(token) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.get(`${API.BASE_URL}/${API.ADMIN}`, { headers });
}

function* getAdminAsync(action) {
  try {
    const response = yield call(getAdminApi, action.token);
    yield put(adminActions.responseAdmin(response.data));
  } catch (e) {
    console.log(e);
    yield put(adminActions.adminFailed(e.response.data));
  }
}

export function* adminSaga() {
  yield takeEvery(types.GET_ADMIN_REQUEST, getAdminAsync);
}
