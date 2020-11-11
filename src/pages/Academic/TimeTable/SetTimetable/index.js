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
import * as subjectActions from '../../../../actions/academic/subjects';
import * as employeeActions from '../../../../actions/employee';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import 'date-fns';

const AssignCourse = () => {
  const [showWeeklyDays, setShowWeeklyDays] = useState(false);
  const [showPeriodTiming, setShowPeriodTiming] = useState(false);
  const [courseId, setCourseId] = useState('');
  const [batchId, setBatchId] = useState('');
  const [name, setName] = useState('');
  const [days, setDays] = useState([
    { name: 'Monday', checked: false },
    { name: 'Tuesday', checked: false },
    { name: 'Wednesday', checked: false },
    { name: 'Thursday', checked: false },
    { name: 'Friday', checked: false },
    { name: 'Saturday', checked: false },
    { name: 'Sunday', checked: false },
  ]);
  const [mydays, setMydays] = useState([]);
  const [currentDay, setCurrentDay] = useState();
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [facultyId, setFacultyId] = useState('');
  const [subjectId, setSubjectId] = useState('');

  const togglePeriodTiming = () => setShowPeriodTiming((value) => !value);
  const toggleWeeklyDays = () => setShowWeeklyDays((value) => !value);
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.couseReducer);
  const { coursesBatch } = useSelector((state) => state.batchReducer);
  const { isTimetableAdding } = useSelector((state) => state.loadingReducer);
  const { specificSubjects } = useSelector((state) => state.subjectReducer);
  const { list } = useSelector((state) => state.employeeReducer);
  const getSubject = (batchId) => {
    dispatch(subjectActions.getCourseBatchRequest(courseId, batchId));
  };

  useEffect(() => {
    dispatch(courseActions.getRequest());
    dispatch(employeeActions.getRequest());
  }, []);

  const getCoursesBatch = (id) => {
    dispatch(batchActions.getCourseBatchRequest(id));
  };
  const handleCheck = (event) => {
    const { value } = event.target;

    setDays((old) => {
      const newArray = old.map((item) => {
        if (item.name === value) {
          item.checked = !item.checked;
          return item;
        }
        return item;
      });
      return newArray;
    });
  };

  const onSubmit = () => {
    const data = {
      course: courseId,
      batch: batchId,
      days: mydays,
      name,
    };
    dispatch(actions.addRequest(data))
   };

  useEffect(() => {
    const newArray = days.map((item) => {
      if (item.checked === true) {
        return { name: item.name, periods: [] };
      }
    });

    setMydays(newArray.filter((x) => x));
    // setMainDays(newArray.map((item) => ({ name: item.name })));
  }, [days]);

  const classes = styles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
                        onChange={(e) => {
                          setBatchId(e.target.value);
                          getSubject(e.target.value);
                        }}
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
                      Name <span className={classes.required}>*</span>
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
              <Table
                style={{ overflow: 'auto' }}
                className={classes.table}
                aria-label="simple table"
              >
                <TableBody>
                  <TableRow>
                    {mydays.map((row, index) => (
                      <TableRow
                        key={index}
                        className={
                          index % 2 === 0
                            ? classes.tableRow
                            : classes.tableHeader
                        }
                      >
                        <TableCell>
                          {row.name}
                          <Button
                            style={{ color: 'blue' }}
                            onClick={() => {
                              togglePeriodTiming();

                              setCurrentDay(
                                mydays.find((item) => {
                                  if (item.name === row.name) {
                                    return item;
                                  }
                                })
                              );
                            }}
                          >
                            Assign
                          </Button>
                        </TableCell>
                        {row.periods.map((item, index) => {
                          return (
                            <TableCell key={index} align="left">
                              <div style={{ display: 'flex' }}>
                                <Typography>
                                  {item.startTime &&
                                    item.startTime.toLocaleTimeString()}
                                </Typography>
                                -
                                <Typography>
                                  {item.endTime &&
                                    item.endTime.toLocaleTimeString()}
                                </Typography>
                              </div>
                              <Typography
                                style={{
                                  fontWeight: 700,
                                }}
                              >
                                {item.subjectName && item.subjectName}
                              </Typography>
                              <Typography>
                                {item.facultyName && item.facultyName}
                              </Typography>
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    ))}
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Button
              variant="contained"
              className={classes.saveBtn}
              startIcon={!isTimetableAdding && <SaveIcon />}
              color="primary"
              onClick={onSubmit}
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
            <CloseIcon
              onClick={toggleWeeklyDays}
              className={classes.closeIcon}
            />
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
                        checked={item.checked}
                        value={item.name}
                      />
                    }
                    label={item.name}
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
              Create Period Timing for {currentDay && currentDay.name}
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
                    <TableCell>Subject</TableCell>
                    <TableCell>Start Time</TableCell>
                    <TableCell>End Time</TableCell>
                    <TableCell>Employee</TableCell>
                  </TableRow>
                </TableHead>
                {mydays &&
                  mydays.map((day) => {
                    return (
                      currentDay &&
                      day.name === currentDay.name &&
                      day.periods.map((item, index) => {
                        return (
                          <TableBody>
                            <TableCell component="th" key={index}>
                              <FormControl variant="filled">
                                <Select
                                  value={
                                    item.subject ? item.subject : subjectId
                                  }
                                  variant="outlined"
                                  onChange={(e, next) => {
                                    setMydays((value) => {
                                      const newArray = value.map((valueDay) => {
                                        let newPeriods;
                                        if (valueDay.name === currentDay.name) {
                                          newPeriods = valueDay.periods.map(
                                            (period, innerIndex) => {
                                              if (index === innerIndex) {
                                                period.subject = e.target.value;
                                                period.subjectName =
                                                  next.props.children;
                                              }

                                              return period;
                                            }
                                          );
                                        }
                                        value.periods = newPeriods;
                                        return valueDay;
                                      });
                                      return newArray;
                                    });
                                    setSubjectId(e.target.value);
                                  }}
                                  className={classes.select}
                                >
                                  {specificSubjects.map((item, index) => (
                                    <MenuItem value={item._id} key={index}>
                                      {item.name}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </TableCell>
                            <TableCell component="th">
                              <KeyboardTimePicker
                                disableToolbar
                                variant="inline"
                                margin="normal"
                                value={
                                  item.startTime ? item.startTime : startTime
                                }
                                onChange={(e) => {
                                  setMydays((value) => {
                                    const newArray = value.map((valueDay) => {
                                      let newPeriods;
                                      if (valueDay.name === currentDay.name) {
                                        newPeriods = valueDay.periods.map(
                                          (period, innerIndex) => {
                                            if (index === innerIndex) {
                                              period.startTime = e;
                                            }
                                            return period;
                                          }
                                        );
                                      }
                                      value.periods = newPeriods;
                                      return valueDay;
                                    });
                                    return newArray;
                                  });
                                  setStartTime(e);
                                }}
                              />
                            </TableCell>
                            <TableCell component="th">
                              <KeyboardTimePicker
                                disableToolbar
                                variant="inline"
                                margin="normal"
                                value={item.endTime ? item.endTime : endTime}
                                onChange={(e) => {
                                  setMydays((value) => {
                                    const newArray = value.map((valueDay) => {
                                      let newPeriods;
                                      if (valueDay.name === currentDay.name) {
                                        newPeriods = valueDay.periods.map(
                                          (period, innerIndex) => {
                                            if (index === innerIndex) {
                                              period.endTime = e;
                                            }
                                            return period;
                                          }
                                        );
                                      }
                                      value.periods = newPeriods;
                                      return valueDay;
                                    });
                                    return newArray;
                                  });
                                  setEndTime(e);
                                }}
                              />
                            </TableCell>
                            <TableCell component="th">
                              <FormControl variant="filled">
                                <Select
                                  value={
                                    item.faculty ? item.faculty : facultyId
                                  }
                                  variant="outlined"
                                  onChange={(e, next) => {
                                    setMydays((value) => {
                                      const newArray = value.map((valueDay) => {
                                        let newPeriods;
                                        if (valueDay.name === currentDay.name) {
                                          newPeriods = valueDay.periods.map(
                                            (period, innerIndex) => {
                                              if (index === innerIndex) {
                                                period.faculty = e.target.value;
                                                period.facultyName =
                                                  next.props.children;
                                              }
                                              return period;
                                            }
                                          );
                                        }
                                        value.periods = newPeriods;
                                        return valueDay;
                                      });
                                      return newArray;
                                    });
                                    setFacultyId(e.target.value);
                                  }}
                                  className={classes.select}
                                >
                                  {list.map((item, index) => (
                                    <MenuItem value={item._id} key={index}>
                                      {item.firstName}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </TableCell>
                          </TableBody>
                        );
                      })
                    );
                  })}

                <TableCell component="th">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      const newArray = mydays.map((item) => {
                        if (item.name === currentDay.name) {
                          item.periods.push({});
                        }
                        return item;
                      });

                      setMydays(newArray);
                      setStartTime(new Date());
                      setEndTime(new Date());
                      setFacultyId('');
                      setSubjectId('');
                    }}
                  >
                    Add Period
                  </Button>
                </TableCell>
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
    </MuiPickersUtilsProvider>
  );
};

export default AssignCourse;
