import { all } from 'redux-saga/effects';
import { loginSaga } from './loginSaga';
import { adminSaga } from './admin';
import { getAcademicsSaga, addAcademicsSaga } from './settings/academics';
import { addInstitutionSaga } from './settings/institution';
import { addCourseSaga, getCourseSaga } from './academics/course';
import { addBatchSaga, getCoursesBatchSaga } from './academics/batch';
import {
  addSubjectSaga,
  getSpecificSaga,
  getSubjectsSaga,
  assignSubjectSaga,
} from './academics/subject';
import { addAssignmentSaga, getAssignmentsSaga } from './academics/assignment';
import { addNoteSaga, getNoteSaga } from './academics/note';
import { addTimeTableSaga } from './academics/timetable';
import { addClassTeacherSaga } from './academics/classTeacher';
import { getTeachersSaga } from './teachers';
import { addEmployeeSaga } from './employee';

export default function* watch() {
  yield all([
    loginSaga(),
    adminSaga(),
    getAcademicsSaga(),
    addAcademicsSaga(),
    addCourseSaga(),
    getCourseSaga(),
    addBatchSaga(),
    addInstitutionSaga(),
    addSubjectSaga(),
    getCoursesBatchSaga(),
    getAssignmentsSaga(),
    addAssignmentSaga(),
    getNoteSaga(),
    addNoteSaga(),
    getSpecificSaga(),
    getSubjectsSaga(),
    assignSubjectSaga(),
    addTimeTableSaga(),
    addClassTeacherSaga(),
    getTeachersSaga(),
    addEmployeeSaga(),
  ]);
}
