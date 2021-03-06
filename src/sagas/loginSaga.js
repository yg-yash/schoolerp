import { put, call, takeEvery } from 'redux-saga/effects';
import * as loginActions from '../actions/auth';
import * as types from '../actions/auth/types';
import API from '../api/ApiConstants';
import axios from 'axios';

function loginUserApi(email, password, role) {
  let url;

  if (role === 'student') {
    url = `${API.BASE_URL}/${API.STUDENT}/login`;
  } else if (role === 'superadmin') {
    url = `${API.BASE_URL}/${API.SUPER_ADMIN_LOGIN}/login`;
  } else if (role === 'admin') {
    url = `${API.BASE_URL}/${API.ADMIN}/login`;
  } else if (role === 'guardian') {
    url = `${API.BASE_URL}/${API.GURADIAN}/login`;
  } else {
    url = `${API.BASE_URL}/${API.TEACHER}/login`;
  }

  return axios.post(url, { email, password });
}

function* loginAsync(action) {
  try {
    yield put(loginActions.enableLoader());
    // const response = yield call(
    //   loginUserApi,
    //   action.email,
    //   action.password,
    //   action.role
    // );

    saveToken('ASdada', action.role);
    yield put(loginActions.disableLoader({}));
    action.history.push('/');
  } catch (e) {
    console.log(e);
    yield put(loginActions.loginFailed(e.response.data));
    yield put(loginActions.disableLoader({}));
  }
}

export function* loginSaga() {
  yield takeEvery(types.LOGIN_REQUEST, loginAsync);
}

function saveToken(token, role) {
  localStorage.setItem('erpToken', token);
  localStorage.setItem('role', role);
}
