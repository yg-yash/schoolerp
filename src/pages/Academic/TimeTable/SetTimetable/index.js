import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ArrowRight from '@material-ui/icons/ArrowRight';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Wrapper } from '../../../../components';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CloseIcon from '@material-ui/icons/Close';
import styles from './styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as courseActions from '../../../../actions/course';
import * as batchActions from '../../../../actions/batch';
import * as actions from '../../../../actions/timetable';
import FormGroup from '@material-ui/core/FormGroup';
import { useSelector, useDispatch } from 'react-redux';

function createData(day) {
  return { day };
}

function createPeriodData(course, startTime, endTime) {
  return { course, startTime, endTime };
}

const rows = [
  createData('Monday', 'STD I_gpa'),
  createData('Tuesday', 'No1'),
  createData('Wednesday', 'STD II_gpa'),
  createData('Friday', 'STD IV_gpa'),
];
const periodRows = [
  createData('Mathmetics', '09:00 AM', '10:00 AM'),
  createData('Science', '10:00 AM', '11:00 AM'),
  createData('BREAK', '11:00 AM', '11:15 AM'),
];

const AssignCourse = ({ width }) => {
  const [userType, setUserType] = useState('');
  const [showWeeklyDays, setShowWeeklyDays] = useState(false);
  const [showPeriodTiming, setShowPeriodTiming] = useState(false);
  const [courseId, setCourseId] = useState('');
  const [batchId, setBatchId] = useState('');
  const [name, setName] = useState('');
  const [days, setDays] = useState([
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]);

  const togglePeriodTiming = () => setShowPeriodTiming((value) => !value);
  const toggleWeeklyDays = () => setShowWeeklyDays((value) => !value);
  const [weekdays, setWeekdays] = useState([
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]);
  const [mydays, setmydays] = useState([]);

  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.couseReducer);
  const { coursesBatch } = useSelector((state) => state.batchReducer);

  const { isTimetableAdding } = useSelector((state) => state.loadingReducer);

  useEffect(() => {
    dispatch(courseActions.getRequest());
  }, []);

  const getCoursesBatch = (id) => {
    dispatch(batchActions.getCourseBatchRequest(id));
  };
  const handleCheck = (event) => {
    const { value } = event.target;
    // setmydays((olda) => {
    //   let newArray;
    //   olda.map((item, index) => {
    //     if (item === value) {
    //       newArray = olda.filter((inner) => inner !== value);
    //     } else {
    //       newArray = [...olda, value];
    //     }
    //   });
    //   return newArray;
    // });
    setDays((days) =>
      days.includes(value) ? days.filter((c) => c !== value) : [...days, value]
    );
  };

  const classes = styles();
  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Academic</Typography>
          <ArrowRight />
          <Typography>Time Table</Typography>
          <ArrowRight />
          <Typography>Set Time Table</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container} spacing={2}>
        <Grid item xs={12}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.cardHeaderTitle}>
                  Select Course & Batch
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent className={classes.topCard}>
              <div className={classes.row}>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Course <span className={classes.required}>*</span>
                  </Typography>
                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={courseId}
                      variant="outlined"
                      onChange={(e) => {
                        setCourseId(e.target.value);
                        getCoursesBatch(e.target.value);
                      }}
                      className={classes.select}
                    >
                      {courses.map((item, index) => (
                        <MenuItem value={item._id} key={index}>
                          {item.courseName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Batch <span className={classes.required}>*</span>
                  </Typography>
                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={batchId}
                      variant="outlined"
                      onChange={(e) => setBatchId(e.target.value)}
                      className={classes.select}
                    >
                      {coursesBatch.map((item, index) => (
                        <MenuItem value={item._id} key={index}>
                          {item.batchName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Batch <span className={classes.required}>*</span>
                  </Typography>

                  <TextField
                    variant="outlined"
                    InputProps={{
                      className: classes.textFieldInput,
                      value: name,
                      onChange: (e) => setName(e.target.value),
                    }}
                    className={classes.textField}
                  />
                </div>
                <Button
                  color="secondary"
                  variant="contained"
                  style={{ width: 250, height: 60 }}
                  onClick={toggleWeeklyDays}
                >
                  Set Weekdays
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.cardHeaderTitle}>
                  Create Timetable
                </Typography>
              }
              className={classes.cardHeader}
            />
            <Table className={classes.table} aria-label="simple table">
              <TableHead className={classes.tableHeader}>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Time table name</TableCell>
                  <TableCell>Opeartions</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={row.name}
                    className={
                      index % 2 === 0 ? classes.tableRow : classes.tableHeader
                    }
                  >
                    <TableCell>
                      {row.day}
                      <Button
                        style={{ color: 'blue' }}
                        onClick={togglePeriodTiming}
                      >
                        Assign
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            variant="contained"
            className={classes.saveBtn}
            startIcon={!isTimetableAdding && <SaveIcon />}
            color="primary"
          >
            {isTimetableAdding ? (
              <CircularProgress color="secondary" />
            ) : (
              'Save Timetable'
            )}
          </Button>
        </Grid>
      </Grid>
      <Dialog
        open={showWeeklyDays}
        onClose={toggleWeeklyDays}
        aria-labelledby="form-dialog-title"
        style={{ minWidth: 500 }}
      >
        <div className={classes.dialogHeader}>
          <DialogTitle
            id="form-dialog-title"
            className={classes.cardHeaderTitle}
          >
            Select Working Days
          </DialogTitle>
          <CloseIcon onClick={toggleWeeklyDays} className={classes.closeIcon} />
        </div>
        <DialogContent>
          <Typography variant="h6">Weekdays</Typography>
          <Divider />
          <FormGroup>
            {days.map((item, index) => (
              <div key={index}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => handleCheck(e)}
                      // checked
                      {...days.includes(item)}
                    />
                  }
                  label={item}
                />
                <Divider />
              </div>
            ))}
          </FormGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleWeeklyDays} color="primary">
            Cancel
          </Button>
          <Button
            onClick={toggleWeeklyDays}
            color="primary"
            variant="contained"
          >
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={showPeriodTiming}
        onClose={togglePeriodTiming}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <div className={classes.dialogHeader}>
          <DialogTitle
            id="form-dialog-title"
            className={classes.cardHeaderTitle}
          >
            Create Period Timing for Monday
          </DialogTitle>
          <CloseIcon
            onClick={togglePeriodTiming}
            className={classes.closeIcon}
          />
        </div>
        <DialogContent>
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableHead className={classes.tableHeader}>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Start Time</TableCell>
                  <TableCell>End Time</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell component="th">
                  <FormControl variant="filled">
                    <Select
                      value={userType}
                      variant="outlined"
                      onChange={(e) => setUserType(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="india">Break</MenuItem>
                      <MenuItem value="australia">Science</MenuItem>
                      <MenuItem value="usa">Mathmetics</MenuItem>
                      <MenuItem value="usa">English</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell component="th">
                  <FormControl variant="filled">
                    <Select
                      value={userType}
                      variant="outlined"
                      onChange={(e) => setUserType(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="india">11:00 AM</MenuItem>
                      <MenuItem value="australia">11:15 AM</MenuItem>
                      <MenuItem value="usa">12:00 PM</MenuItem>
                      <MenuItem value="usa">12:30PM</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell component="th">
                  <FormControl variant="filled">
                    <Select
                      value={userType}
                      variant="outlined"
                      onChange={(e) => setUserType(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="india">11:00 AM</MenuItem>
                      <MenuItem value="australia">11:15 AM</MenuItem>
                      <MenuItem value="usa">12:00 PM</MenuItem>
                      <MenuItem value="usa">12:30PM</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell component="th">
                  <Button variant="contained" color="primary">
                    Add Period
                  </Button>
                </TableCell>
                {periodRows.map((row, index) => (
                  <TableRow
                    key={row.name}
                    className={
                      index % 2 === 0 ? classes.tableRow : classes.tableHeader
                    }
                  >
                    <TableCell component="th">{row.subject}</TableCell>
                    <TableCell>{row.startTime}</TableCell>
                    <TableCell>{row.endTime}</TableCell>
                    <TableCell>
                      <HighlightOffIcon />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={togglePeriodTiming} color="primary">
            Cancel
          </Button>
          <Button
            onClick={togglePeriodTiming}
            color="primary"
            variant="contained"
          >
            Create Time Table
          </Button>
        </DialogActions>
      </Dialog>
    </Wrapper>
  );
};

export default AssignCourse;
