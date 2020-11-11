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
  allocateSubjectsSaga,
} from './academics/subject';
import { addAssignmentSaga, getAssignmentsSaga } from './academics/assignment';
import { addNoteSaga, getNoteSaga } from './academics/note';
import {
  addTimeTableSaga,
  getTimetableSaga,
  getTimetableNamesSaga,
} from './academics/timetable';
import { addClassTeacherSaga } from './academics/classTeacher';
import { getTeachersSaga } from './teachers';
import { addEmployeeSaga } from './employee';
import { addUserTypeSaga, getUserTypeSaga } from './userTypes';
import { addDepartmentSaga, getDepartmentSaga } from './departments';
import { addTaskSaga, getTaskSaga } from './task';
import { getUsersSaga } from './settings/user';
import { addVisitorsSaga, getVisitorsSaga } from './settings/visitors';
import { getEmployeeByDepartmentSaga, getEmployeeSaga } from './employee';

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
    addUserTypeSaga(),
    getUserTypeSaga(),
    addTaskSaga(),
    getTaskSaga(),
    addDepartmentSaga(),
    getDepartmentSaga(),
    getUsersSaga(),
    getVisitorsSaga(),
    addVisitorsSaga(),
    getEmployeeByDepartmentSaga(),
    allocateSubjectsSaga(),
    getEmployeeSaga(),
    getTimetableSaga(),
    getTimetableNamesSaga(),
  ]);
}
