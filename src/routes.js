// Pages
import {
  // AppBar,
  // Autocomplete,
  // Avatars,
  // BackendError,
  // Badges,
  // Blank,
  // ButtonNavigation,
  // Buttons,
  // Calendar,
  // Cards,
  // Charts,
  // Chat,
  // Chips,
  // Detail,
  // Dialogs,
  // Dividers,
  // Drawers,
  // Editor,
  // ExpansionPanels,
  // Google,
  // GridList,
  Home,
  // Invoice,
  // Leaflet,
  // Lists,
  // Lockscreen,
  // Media,
  // Menus,
  // Messages,
  // NotFound,
  // Paper,
  // PasswordReset,
  // Pickers,
  // PricingPage,
  // Products,
  // Progress,
  // SelectionControls,
  // Selects,
  // Signin,
  // Signup,
  // Snackbars,
  // Social,
  // Steppers,
  // Tables,
  // Tabs,
  // Taskboard,
  // TextFields,
  // TimelinePage,
  // Tooltips,
  // Widgets,
  //Settings
  InstitutionDetails,
  AcademicDetails,
  StudentImport,
  EmployeeImport,
  Privileges,
  AssignCourse,
  Users,
  ApplicantList,
  LoginPage,
  FeesAllocationImport,
  CasteAndReligion,
  VisitorsList,
  Course,
  Batch,
  ClassTeacherAllocation,
  Subjects,
  AssignSubject,
  SubjectAllocation,
  ElectiveSubject,
  SubjectAllocationImport,
  LessonPlanning,
  SetTimetable,
  ActiveTimeTable,
  ViewBatchTimeTable,
  ViewTeacherTimetable,
  TeamWorkingHours,
  TimetableExport,
  TimetableImport,
  SetTerm,
  GPASkill,
  GPASkillMark,
  SetSubjectCreditPoint,
  CreateExam,
  SetGradeScale,
  SetAssessment,
  SearchProxy,
  AddAssignments,
  AddNotes,
  AssignmentsImport,
  NewOnlineExam,
  ViewOnlineExam,
  ViewExamResults,
  UnitTest,
  AssignTask,
  TaskDetails,
  VideoUpload,
} from './pages';

// import AppsIcon from '@material-ui/icons/Apps';
// import BookmarkIcon from '@material-ui/icons/Bookmark';
// import EqualizerIcon from '@material-ui/icons/Equalizer';
// // Icons
// // import ExploreIcon from '@material-ui/icons/Explore';
// import FaceIcon from '@material-ui/icons/Face';
// import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
// import Looks3Icon from '@material-ui/icons/Looks3';
// import Looks4Icon from '@material-ui/icons/Looks4';
// import NavigationIcon from '@material-ui/icons/Navigation';
// import PagesIcon from '@material-ui/icons/Pages';
// import PersonIcon from '@material-ui/icons/Person';
// import PhotoIcon from '@material-ui/icons/Photo';
// import ShowChartIcon from '@material-ui/icons/ShowChart';
// import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import PeopleAlt from '@material-ui/icons/PeopleAlt';
import WorkIcon from '@material-ui/icons/Work';

export default {
  items: [
    {
      path: '/',
      name: 'Dashboard',
      type: 'link',
      icon: HomeIcon,
      component: Home,
      roles: ['admin', 'student', 'teacher', 'guardian', 'superadmin'],
    },
    {
      path: '/settings',
      name: 'Settings',
      type: 'submenu',
      icon: SettingsIcon,
      roles: ['admin', 'superadmin'],
      // badge: {
      //   type: 'primary',
      //   value: '5',
      // },
      children: [
        {
          path: '/institution',
          name: 'Institution Details',
          component: InstitutionDetails,
        },
        {
          path: '/academic',
          name: 'Academic Details',
          component: AcademicDetails,
        },
        {
          path: '/student',
          name: 'Student Import',
          component: StudentImport,
        },
        {
          path: '/employee',
          name: 'Employee Import',
          component: EmployeeImport,
        },
        {
          path: '/privileges',
          name: 'Privileges',
          component: Privileges,
        },
        {
          path: '/assign',
          name: 'Assign Course',
          component: AssignCourse,
        },
        {
          path: '/users',
          name: 'Users',
          component: Users,
        },
        {
          path: '/applicant',
          name: 'Applicant List',
          component: ApplicantList,
        },
        {
          path: '/loginform',
          name: 'Login Page',
          component: LoginPage,
        },
        {
          path: '/feesallocation',
          name: 'Fees Allocation Import',
          component: FeesAllocationImport,
        },
        {
          path: '/caste',
          name: 'Caste And Religion',
          component: CasteAndReligion,
        },
        {
          path: '/visitors',
          name: 'Visitors List',
          component: VisitorsList,
        },
      ],
    },
    {
      path: '/academic',
      name: 'Academic',
      icon: PeopleAlt,
      type: 'twomenu',
      roles: ['student', 'admin', 'teacher', 'guardian', 'superadmin'],
      children: [
        {
          path: '/coursebatch',
          name: 'Course & Batch',
          type: 'submenu',
          roles: ['admin'],
          children: [
            {
              path: '/course',
              name: 'Course',
              component: Course,
            },
            {
              path: '/batch',
              name: 'Batch',
              component: Batch,
            },
            {
              path: '/allocation',
              name: 'Class Teacher Aallocation',
              component: ClassTeacherAllocation,
            },
          ],
        },
        {
          path: '/subjects',
          name: 'Subjects',
          type: 'submenu',
          roles: ['admin', 'superadmin'],
          children: [
            {
              path: '/subjects',
              name: 'Subjects',
              component: Subjects,
              roles: ['admin', 'superadmin'],
            },
            {
              path: '/assign',
              name: 'Assign Subject',
              component: AssignSubject,
              roles: ['admin', 'superadmin'],
            },
            {
              path: '/allocation',
              name: 'Subject Allocation',
              component: SubjectAllocation,
              roles: ['admin', 'superadmin'],
            },
            {
              path: '/elective',
              name: 'Elective Subject',
              component: ElectiveSubject,
              roles: ['admin', 'superadmin'],
            },
            {
              path: '/allocationimport',
              name: 'Subject Allocation Import',
              component: SubjectAllocationImport,
              roles: ['admin', 'superadmin'],
            },
          ],
        },
        {
          path: '/lessonplanning',
          name: 'Lesson Planning',
          type: 'submenu',
          roles: ['student', 'admin', 'teacher', 'guardian', 'superadmin'],
          children: [
            {
              path: '/planning',
              name: 'Lesson Planning',
              component: LessonPlanning,
              roles: ['student', 'admin', 'teacher', 'guardian', 'superadmin'],
            },
          ],
        },
        {
          path: '/timetable',
          name: 'Timetable',
          type: 'submenu',
          roles: ['admin', 'teacher', 'superadmin'],
          children: [
            {
              path: '/set',
              name: 'Set Timetable',
              component: SetTimetable,
              roles: ['admin', 'superadmin'],
            },
            {
              path: '/active',
              name: 'Active Timetable',
              component: ActiveTimeTable,
              roles: ['admin', 'superadmin'],
            },
            {
              path: '/batch',
              name: 'View Batch Timetable',
              component: ViewBatchTimeTable,
              roles: ['admin', 'superadmin'],
            },
            {
              path: '/teacher',
              name: 'View Teacher Timetable',
              component: ViewTeacherTimetable,
              roles: ['admin', 'teacher', 'superadmin'],
            },
            {
              path: '/proxy',
              name: 'Search Proxy',
              component: SearchProxy,
              roles: ['admin', 'superadmin'],
            },
            {
              path: '/export',
              name: 'Timetable Export',
              component: TimetableExport,
              roles: ['admin', 'superadmin'],
            },
            {
              path: '/import',
              name: 'Timetable Import',
              component: TimetableImport,
              roles: ['admin', 'superadmin'],
            },
          ],
        },
        {
          path: '/exams',
          name: 'Exams',
          type: 'submenu',
          roles: ['admin', 'guardian', 'superadmin'],
          children: [
            {
              path: '/set',
              name: 'Set Term',
              component: SetTerm,
              roles: ['admin', 'superadmin'],
            },
            {
              path: '/create',
              name: 'Create Exam',
              component: CreateExam,
              roles: ['admin', 'superadmin'],
            },
            {
              path: '/skill',
              name: 'GPA Skill',
              component: GPASkill,
              roles: ['admin', 'superadmin'],
            },
            {
              path: '/skillmark',
              name: 'GPA Skill Mark',
              component: GPASkillMark,
              roles: ['admin', 'superadmin'],
            },
            {
              path: '/gradescale',
              name: 'Set Grade Scale',
              component: SetGradeScale,
              roles: ['admin', 'superadmin'],
            },
            {
              path: '/subject',
              name: 'Subject Credit Point',
              component: SetSubjectCreditPoint,
              roles: ['admin', 'superadmin'],
            },
            {
              path: '/assessment',
              name: 'Set Assessment',
              component: SetAssessment,
              roles: ['admin', 'superadmin'],
            },
          ],
        },
        {
          path: '/onlineexams',
          name: 'Online Exam',
          type: 'submenu',
          roles: ['admin', 'superadmin'],
          children: [
            {
              path: '/new',
              name: 'New Online Exam',
              component: NewOnlineExam,
              roles: ['admin', 'superadmin'],
            },
            {
              path: '/unit',
              name: 'Unit Test',
              component: CreateExam,
              roles: ['admin', 'superadmin'],
            },
            {
              path: '/video',
              name: 'Video Upload',
              component: VideoUpload,
              roles: ['admin', 'superadmin'],
            },
            {
              path: '/view',
              name: 'View Exam Results',
              component: ViewExamResults,
              roles: ['admin', 'superadmin'],
            },
            {
              path: '/online',
              name: 'View Online Exam',
              component: ViewOnlineExam,
              roles: ['admin', 'superadmin'],
            },
          ],
        },
        {
          path: '/assignment',
          name: 'Assignments And Notes',
          type: 'submenu',
          roles: ['admin', 'teacher', 'superadmin'],
          children: [
            {
              path: '/add',
              name: 'Add Assignment',
              component: AddAssignments,
              roles: ['admin', 'teacher', 'superadmin'],
            },
            {
              path: '/notes',
              name: 'Add Notes',
              component: AddNotes,
              roles: ['admin', 'teacher', 'superadmin'],
            },
            {
              path: '/import',
              name: 'Assignments Import',
              component: AssignmentsImport,
              roles: ['admin', 'teacher', 'superadmin'],
            },
          ],
        },
        {
          path: '/result',
          name: 'Results',
          type: 'submenu',
          roles: ['student', 'superadmin'],
          component: ViewExamResults,
          children: [
            {
              path: '/results',
              name: 'Results',
              roles: ['student', 'superadmin'],
            },
          ],
        },
      ],
    },
    {
      path: '/task',
      name: 'Task Manager',
      icon: WorkIcon,
      type: 'submenu',
      roles: ['student', 'admin', 'teacher', 'guardian', 'superadmin'],
      children: [
        {
          path: '/assign',
          name: 'Assign Task',
          component: AssignTask,
          roles: ['student', 'admin', 'teacher', 'superadmin'],
        },
        {
          path: '/details',
          name: 'Task Details',
          component: TaskDetails,
          roles: ['student', 'admin', 'teacher', 'guardian', 'superadmin'],
        },
      ],
    },

    // {
    //   path: '/widgets',
    //   name: 'Widgets',
    //   type: 'link',
    //   icon: PhotoIcon,
    //   component: Widgets,
    // },
    // {
    //   path: '/material',
    //   name: 'Material',
    //   type: 'submenu',
    //   icon: EqualizerIcon,
    //   badge: {
    //     type: 'error',
    //     value: '10',
    //   },
    //   children: [
    //     {
    //       path: '/appbar',
    //       name: 'App Bar',
    //       component: AppBar,
    //     },
    //     {
    //       path: '/autocomplete',
    //       name: 'Auto Complete',
    //       component: Autocomplete,
    //     },
    //     {
    //       path: '/avatars',
    //       name: 'Avatars',
    //       component: Avatars,
    //     },
    //     {
    //       path: '/badges',
    //       name: 'Badges',
    //       component: Badges,
    //     },
    //     {
    //       path: '/button-navigation',
    //       name: 'Button Navigation',
    //       component: ButtonNavigation,
    //     },
    //     {
    //       path: '/buttons',
    //       name: 'Buttons',
    //       component: Buttons,
    //     },
    //     {
    //       path: '/cards',
    //       name: 'Cards',
    //       component: Cards,
    //     },
    //     {
    //       path: '/chips',
    //       name: 'Chips',
    //       component: Chips,
    //     },
    //     {
    //       path: '/dialogs',
    //       name: 'Dialogs',
    //       component: Dialogs,
    //     },
    //     {
    //       path: '/dividers',
    //       name: 'Dividers',
    //       component: Dividers,
    //     },
    //     {
    //       path: '/drawers',
    //       name: 'Drawers',
    //       component: Drawers,
    //     },
    //     {
    //       path: '/expansion-panels',
    //       name: 'Expansion Panels',
    //       component: ExpansionPanels,
    //     },
    //     {
    //       path: '/grid-list',
    //       name: 'Grid List',
    //       component: GridList,
    //     },
    //     {
    //       path: '/lists',
    //       name: 'Lists',
    //       component: Lists,
    //     },
    //     {
    //       path: '/menus',
    //       name: 'Menus',
    //       component: Menus,
    //     },
    //     {
    //       path: '/paper',
    //       name: 'Paper',
    //       component: Paper,
    //     },
    //     {
    //       path: '/pickers',
    //       name: 'Pickers',
    //       component: Pickers,
    //     },
    //     {
    //       path: '/progress',
    //       name: 'Progress',
    //       component: Progress,
    //     },
    //     {
    //       path: '/selection-controls',
    //       name: 'Selection Controls',
    //       component: SelectionControls,
    //     },
    //     {
    //       path: '/selects',
    //       name: 'Selects',
    //       component: Selects,
    //     },
    //     {
    //       path: '/snackbars',
    //       name: 'Snackbars',
    //       component: Snackbars,
    //     },
    //     {
    //       path: '/steppers',
    //       name: 'Steppers',
    //       component: Steppers,
    //     },
    //     {
    //       path: '/tables',
    //       name: 'Tables',
    //       component: Tables,
    //     },
    //     {
    //       path: '/tabs',
    //       name: 'Tabs',
    //       component: Tabs,
    //     },
    //     {
    //       path: '/text-fields',
    //       name: 'Text Fields',
    //       component: TextFields,
    //     },
    //     {
    //       path: '/tooltips',
    //       name: 'Tooltips',
    //       component: Tooltips,
    //     },
    //   ],
    // },
    // {
    //   path: '/editor',
    //   name: 'Editor',
    //   type: 'link',
    //   icon: Looks3Icon,
    //   component: Editor,
    // },
    // {
    //   path: '/ecommerce',
    //   name: 'Ecommerce',
    //   type: 'submenu',
    //   icon: Looks4Icon,
    //   badge: {
    //     type: 'secondary',
    //     value: 'N',
    //   },
    //   children: [
    //     {
    //       path: '/products',
    //       name: 'Products',
    //       component: Products,
    //     },
    //     {
    //       path: '/detail',
    //       name: 'Detail',
    //       component: Detail,
    //     },
    //   ],
    // },
    // {
    //   path: '/taskboard',
    //   name: 'Taskboard',
    //   type: 'link',
    //   icon: ViewColumnIcon,
    //   component: Taskboard,
    // },
    // {
    //   path: '/charts',
    //   name: 'Charts',
    //   type: 'link',
    //   icon: ShowChartIcon,
    //   component: Charts,
    // },
    // {
    //   path: '/maps',
    //   name: 'Maps',
    //   type: 'submenu',
    //   icon: NavigationIcon,
    //   children: [
    //     {
    //       path: '/google',
    //       name: 'Google',
    //       component: Google,
    //     },
    //     {
    //       path: '/leaflet',
    //       name: 'Leaflet',
    //       component: Leaflet,
    //     },
    //   ],
    // },
    // {
    //   path: '/pages',
    //   name: 'Pages',
    //   type: 'submenu',
    //   icon: PagesIcon,
    //   children: [
    //     {
    //       path: '/invoice',
    //       name: 'Invoice',
    //       component: Invoice,
    //     },
    //     {
    //       path: '/timeline',
    //       name: 'Timeline',
    //       component: TimelinePage,
    //     },
    //     {
    //       path: '/blank',
    //       name: 'Blank',
    //       component: Blank,
    //     },
    //     {
    //       path: '/pricing',
    //       name: 'Pricing',
    //       component: PricingPage,
    //     },
    //   ],
    // },
    // {
    //   name: 'Authentication',
    //   type: 'submenu',
    //   icon: PersonIcon,
    //   children: [
    //     {
    //       path: '/signin',
    //       name: 'Signin',
    //       component: Signin,
    //     },
    //     {
    //       path: '/signup',
    //       name: 'Signup',
    //       component: Signup,
    //     },
    //     {
    //       path: '/forgot',
    //       name: 'Forgot',
    //       component: PasswordReset,
    //     },
    //     {
    //       path: '/lockscreen',
    //       name: 'Lockscreen',
    //       component: Lockscreen,
    //     },
    //   ],
    // },
    // {
    //   name: 'Error',
    //   type: 'submenu',
    //   icon: FaceIcon,
    //   children: [
    //     {
    //       path: '/404',
    //       name: '404',
    //       component: NotFound,
    //     },
    //     {
    //       path: '/500',
    //       name: 'Error',
    //       component: BackendError,
    //     },
    //   ],
    // },
    // {
    //   path: 'https://iamnyasha.github.io/react-primer-docs/',
    //   name: 'Documentation',
    //   type: 'external',
    //   icon: LocalLibraryIcon,
    // },
    // {
    //   path: 'https://primer.fusepx.com',
    //   name: 'Get Angular Version',
    //   type: 'external',
    //   icon: BookmarkIcon,
    // },
  ],
};
