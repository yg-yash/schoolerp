/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as authReducer from './authReducer';
import * as adminReducer from './adminReducer';
import * as academicReducer from './settings/academicReducer';
import * as institutionReducer from './settings/institutionReducer';
import * as courseReducer from './academics/courseReducer';
import * as batchReducer from './academics/batchReducer';
import * as subjectReducer from './academics/subjectReducer';
import * as assignmentReducer from './academics/assignmentReducer';
import * as classTeacherReducer from './academics/classTeacherReducer';
import * as teacherReducer from './teacher';
import * as userTypesReducer from './userType';
import * as taskReducer from './task';
import * as noteReducer from './academics/noteReducer';
import * as departmentReducer from './department';
import * as usersReducer from './settings/usersReducer';
import * as visitorsReducer from './settings/visitorsReducer';
import * as employeeReducer from './employee';
import * as timetableReducer from './academics/timetableReducer';

export default Object.assign(
  authReducer,
  loadingReducer,
  adminReducer,
  academicReducer,
  institutionReducer,
  courseReducer,
  batchReducer,
  subjectReducer,
  assignmentReducer,
  classTeacherReducer,
  teacherReducer,
  userTypesReducer,
  taskReducer,
  noteReducer,
  departmentReducer,
  usersReducer,
  visitorsReducer,
  employeeReducer,
  timetableReducer
);
