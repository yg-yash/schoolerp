import createReducer from '../utils/createReducer';
import * as types from '../actions/auth/types';
import * as academicsTypes from '../actions/settings/academic/types';
import * as institutionTypes from '../actions/settings/institution/types';
import * as courseTypes from '../actions/course/types';
import * as batchTypes from '../actions/batch/types';
import * as subjectTypes from '../actions/academic/subjects/types';
import * as assignmentTypes from '../actions/assignments/types';
import * as notesTypes from '../actions/notes/types';
import * as timetableTypes from '../actions/timetable/types';
import * as classTeacherTypes from '../actions/classTeacher/types';
import * as employeeTypes from '../actions/employee/types';
import * as userTypes from '../actions/userType/types';
import * as departmentTypes from '../actions/departments/types';
import * as visitorsTypes from '../actions/settings/visitors/types';

const initialState = {
  isLoginLoading: false,
  isAddAcademicLoading: false,
  isCourseAdding: false,
  isCoursesLoading: false,
  isBatchAdding: false,
  isInstitutionAdding: false,
  isSubjectAdding: false,
  isSubjectAssign: false,
  isAssignmentAdding: false,
  isNotesAdding: false,
  isTimetableAdding: false,
  isClassTeacherAdding: false,
  isEmployeeAdding: false,
  isUserTypeAdding: false,
  isDepartmentsAdding: false,
  isVisitorsAdding: false,
};

export const loadingReducer = createReducer(initialState, {
  [types.LOGIN_ENABLE_LOADER](state) {
    return { ...state, isLoginLoading: true };
  },
  [types.LOGIN_DISABLE_LOADER](state) {
    return { ...state, isLoginLoading: false };
  },
  [academicsTypes.ENABLE_ADD_ACADEMIC_LOADER](state) {
    return { ...state, isAddAcademicLoading: true };
  },
  [academicsTypes.DISABLE_ADD_ACADEMIC_LOADER](state) {
    return { ...state, isAddAcademicLoading: false };
  },
  [courseTypes.ENABLE_ADD_COURSE_LOADER](state) {
    return { ...state, isCourseAdding: true };
  },
  [courseTypes.DISABLE_ADD_COURSE_LOADER](state) {
    return { ...state, isCourseAdding: false };
  },
  [courseTypes.ENABLE_GET_COURSE_LOADER](state) {
    return { ...state, isCoursesLoading: true };
  },
  [courseTypes.DISABLE_GET_COURSE_LOADER](state) {
    return { ...state, isCoursesLoading: false };
  },
  [batchTypes.ENABLE_ADD_BATCH_LOADER](state) {
    return { ...state, isBatchAdding: true };
  },
  [batchTypes.DISABLE_ADD_BATCH_LOADER](state) {
    return { ...state, isBatchAdding: false };
  },
  [institutionTypes.ENABLE_ADD_INSTITUTION_LOADER](state) {
    return { ...state, isInstitutionAdding: true };
  },
  [institutionTypes.DISABLE_ADD_INSTITUTION_LOADER](state) {
    return { ...state, isInstitutionAdding: false };
  },
  [subjectTypes.ENABLE_ADD_SUBJECT_LOADER](state) {
    return { ...state, isSubjectAdding: true };
  },
  [subjectTypes.DISABLE_ADD_SUBJECT_LOADER](state) {
    return { ...state, isSubjectAdding: false };
  },
  [subjectTypes.ENABLE_ASSIGN_SUBJECT_LOADER](state) {
    return { ...state, isSubjectAssign: true };
  },
  [subjectTypes.DISABLE_ASSIGN_SUBJECT_LOADER](state) {
    return { ...state, isSubjectAssign: false };
  },
  [assignmentTypes.ENABLE_ADD_ASSIGNMENTS_LOADER](state) {
    return { ...state, isAssignmentAdding: true };
  },
  [assignmentTypes.DISABLE_ADD_ASSIGNMENTS_LOADER](state) {
    return { ...state, isAssignmentAdding: false };
  },
  [notesTypes.ENABLE_ADD_NOTE_LOADER](state) {
    return { ...state, isNoteAdding: true };
  },
  [notesTypes.DISABLE_ADD_NOTE_LOADER](state) {
    return { ...state, isNoteAdding: false };
  },
  [timetableTypes.ENABLE_ADD_TIMETABLE_LOADER](state) {
    return { ...state, isTimetableAdding: true };
  },
  [timetableTypes.DISABLE_ADD_TIMETABLE_LOADER](state) {
    return { ...state, isTimetableAdding: false };
  },
  [classTeacherTypes.ENABLE_ADD_CLASS_TEACHER_LOADER](state) {
    return { ...state, isClassTeacherAdding: true };
  },
  [classTeacherTypes.DISABLE_ADD_CLASS_TEACHER_LOADER](state) {
    return { ...state, isClassTeacherAdding: false };
  },
  [employeeTypes.ENABLE_ADD_EMPLOYEE_LOADER](state) {
    return { ...state, isEmployeeAdding: true };
  },
  [employeeTypes.DISABLE_ADD_EMPLOYEE_LOADER](state) {
    return { ...state, isEmployeeAdding: false };
  },
  [userTypes.ENABLE_ADD_USER_TYPE_LOADER](state) {
    return { ...state, isUserTypeAdding: true };
  },
  [userTypes.DISABLE_ADD_USER_TYPE_LOADER](state) {
    return { ...state, isUserTypeAdding: false };
  },
  [departmentTypes.ENABLE_ADD_DEPARTMENT_LOADER](state) {
    return { ...state, isDepartmentsAdding: true };
  },
  [departmentTypes.DISABLE_ADD_DEPARTMENT_LOADER](state) {
    return { ...state, isDepartmentsAdding: false };
  },
  [visitorsTypes.ENABLE_ADD_VISITORS_LOADER](state) {
    return { ...state, isVisitorsAdding: true };
  },
  [visitorsTypes.DISABLE_ADD_VISITORS_LOADER](state) {
    return { ...state, isVisitorsAdding: false };
  },
});
