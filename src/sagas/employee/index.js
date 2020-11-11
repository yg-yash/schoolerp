import { put, call, takeEvery } from 'redux-saga/effects';
import * as actions from '../../actions/employee';
import * as types from '../../actions/employee/types';
import API from '../../api/ApiConstants';
import axios from 'axios';

function addApi(token, data) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.post(`${API.BASE_URL}/${API.EMPLOYEE}/add`, data, {
    headers,
  });
}
function getApi(token, data) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.get(`${API.BASE_URL}/${API.EMPLOYEE}`, {
    headers,
  });
}
function getEmployeeByDepartmentApi(token, id) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.get(`${API.BASE_URL}/${API.EMPLOYEE}/department/${id}`, {
    headers,
  });
}

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

function* getEmployeeByDepartmentAsync(action) {
  try {
    const token = yield call(getToken);
    const response = yield call(getEmployeeByDepartmentApi, token, action.id);
    yield put(actions.getEmployeeByDepartmentResponse(response.data));
  } catch (e) {
    console.log(e);
    yield put(actions.getEmployeeByDepartmentFailed(e.response.data));
  }
}

export function* addEmployeeSaga() {
  yield takeEvery(types.ADD_EMPLOYEE_REQUEST, addAsync);
}
export function* getEmployeeSaga() {
  yield takeEvery(types.GET_EMPLOYEES_REQUEST, getAsync);
}

export function* getEmployeeByDepartmentSaga() {
  yield takeEvery(
    types.GET_EMPLOYEE_BY_DEPARTMENTS_REQUEST,
    getEmployeeByDepartmentAsync
  );
}

const getToken = () => {
  return localStorage.getItem('erpToken');
};
