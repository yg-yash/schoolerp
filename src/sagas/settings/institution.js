import { put, call, takeEvery } from 'redux-saga/effects';
import * as institutionActions from '../../actions/settings/institution';
import * as types from '../../actions/settings/institution/types';
import API from '../../api/ApiConstants';
import axios from 'axios';

// function getAcademicsApi(token) {
//   const headers = { Authorization: `Bearer ${token}` };
//   return axios.get(`${API.BASE_URL}/${API.INSTITUTION}`, { headers });
// }

function addInstitutionApi(token, data) {
  const headers = { Authorization: `Bearer ${token}` };
  return axios.post(`${API.BASE_URL}/${API.INSTITUTION}/add`, data, {
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

function* addInstitutionAsync(action) {
  try {
    yield put(institutionActions.enableAddLoader());
    const token = yield call(getToken);
    const response = yield call(addInstitutionApi, token, action.data);
    yield put(institutionActions.addInstitutionResponse(response.data));
    yield put(institutionActions.disableAddLoader());
  } catch (e) {
    console.log(e);
    yield put(institutionActions.addInstitutionFailed(e.response.data));
    yield put(institutionActions.disableAddLoader());
  }
}

// export function* getAcademicsSaga() {
//   yield takeEvery(types.GET_ACADEMIC_REQUEST, getAcademicsAsync);
// }

export function* addInstitutionSaga() {
  yield takeEvery(types.ADD_INSTITUTION_REQUEST, addInstitutionAsync);
}

const getToken = () => {
  return localStorage.getItem('erpToken');
};
