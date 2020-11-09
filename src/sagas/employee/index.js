import { put, call, takeEvery } from 'redux-saga/effects';
import * as actions from '../../actions/employee';
import * as types from '../../actions/employee/types';
import API from '../../api/ApiConstants';
import axios from 'axios';

// function getAcademicsApi(token) {
//   const headers = { Authorization: `Bearer ${token}` };
//   return axios.get(`${API.BASE_URL}/${API.INSTITUTION}`, { headers });
// }

function addApi(token, data) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.post(`${API.BASE_URL}/${API.EMPLOYEE}/add`, data, {
    headers,
  });
}

// function* getAcademicsAsync(action) {
//   try {
//     const token = yield call(getToken);
//     const response = yield call(getAcademicsApi, token);

//     yield put(institutionActions.getAcademicsResponse(response.data));
//   } catch (e) {
//     console.log(e);
//     yield put(institutionActions.getAcademicsFailed(e.response.data));
//   }
// }

function* addAsync(action) {
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

export function* addEmployeeSaga() {
  yield takeEvery(types.ADD_EMPLOYEE_REQUEST, addAsync);
}

const getToken = () => {
  return localStorage.getItem('erpToken');
};
