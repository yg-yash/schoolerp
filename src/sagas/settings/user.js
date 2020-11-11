import { put, call, takeEvery } from 'redux-saga/effects';
import * as academicActions from '../../actions/settings/users';
import * as types from '../../actions/settings/users/types';
import API from '../../api/ApiConstants';
import axios from 'axios';

function getApi(token, id) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.get(`${API.BASE_URL}/${API.USERS}/${id}`, { headers });
}

function* getAsync(action) {
  try {
    const token = yield call(getToken);
    const response = yield call(getApi, token, action.id);
    yield put(academicActions.getResponse(response.data));
  } catch (e) {
    console.log(e);
    yield put(academicActions.getFailed(e.response.data));
  }
}

export function* getUsersSaga() {
  yield takeEvery(types.GET_USERS_REQUEST, getAsync);
}

const getToken = () => {
  return localStorage.getItem('erpToken');
};
