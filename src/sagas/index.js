import { all } from 'redux-saga/effects';
import { loginSaga } from './loginSaga';

export default function* watch() {
  yield all([loginSaga()]);
}
