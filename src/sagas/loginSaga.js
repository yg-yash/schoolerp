import { put, call, takeEvery } from 'redux-saga/effects';
import * as loginActions from '../actions/auth';
import * as types from '../actions/auth/types';
import API from '../api/ApiConstants';
import axios from 'axios';

function loginUserApi(email, password, role) {
  let url;

  if (role === 'student') {
    url = `/${API.STUDENT_LOGIN}`;
  } else if (role === 'superadmin') {
    url = `/${API.SUPER_ADMIN_LOGIN}`;
  } else if (role === 'admin') {
    url = `/${API.ADMIN_LOGIN}`;
  } else if (role === 'guardian') {
    url = `/${API.GURADIAN_LOGIN}`;
  } else {
    url = `/${API.TEACHER_LOGIN}`;
  }

  return axios.post(url, { email, password });
}

function* loginAsync(action) {
  console.log(action);
  try {
    yield put(loginActions.enableLoader());
    // const response = yield call(
    //   loginUserApi,
    //   action.email,
    //   action.password,
    //   action.role
    // );
    // yield put(saveToken(response.data.token));
    // yield put(saveToken(action.role));
    saveToken(action.role);
    yield put(loginActions.disableLoader({}));
    action.history.push('/');
  } catch (e) {
    console.log(e);
    // yield put(loginActions.logiknFailed(e.response.data));
    yield put(loginActions.disableLoader({}));
  }
}

export function* loginSaga() {
  yield takeEvery(types.LOGIN_REQUEST, loginAsync);
}

function saveToken(token) {
  console.log('erole', token);
  // localStorage.setItem('erpToken', token);
  localStorage.setItem('role', token);
}
