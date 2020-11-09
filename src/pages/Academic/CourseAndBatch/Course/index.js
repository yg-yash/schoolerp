import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { Wrapper } from '../../../../components';
import AppBar from '@material-ui/core/AppBar';
import ArrowRight from '@material-ui/icons/ArrowRight';
import Toolbar from '@material-ui/core/Toolbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import SaveIcon from '@material-ui/icons/Save';
import * as actions from '../../../../actions/course';
import { useSelector, useDispatch } from 'react-redux';

const Course = () => {
  const classes = styles();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [code, setCode] = useState('');
  const [minimumAttendance, setMinimumAttendance] = useState('');
  const [attendanceType, setAttendanceType] = useState('');
  const [totalWorkingDay, setTotalWorkingDay] = useState('');
  const [syllabusName, setSyllabusName] = useState('');
  const { isCourseAdding } = useSelector((state) => state.loadingReducer);
  // const { error } = useSelector((state) => state.courseReducer);

  const dispatch = useDispatch();

  const onSubmit = () => {
    const data = {
      courseName: name,
      description,
      code,
      minimumAttendance: Number(minimumAttendance),
      attendanceType,
      totalWorkingDay: Number(totalWorkingDay),
      syllabusName,
    };

    dispatch(actions.addRequest(data));
  };
  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Academic</Typography>
          <ArrowRight />
          <Typography>Course & Batch</Typography>
          <ArrowRight />
          <Typography>Course</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container}>
        <Grid item xs={10} className={classes.column}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.headingText}>
                  Add Course
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Course Name <span className={classes.required}>*</span>
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
              <div className={`${classes.inputContainer}`}>
                <Typography variant="body2">
                  Description <span className={classes.required}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  InputProps={{
                    className: classes.textFieldInput,
                    value: description,
                    onChange: (e) => setDescription(e.target.value),
                  }}
                  className={classes.textField}
                />
              </div>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Code <span className={classes.required}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  InputProps={{
                    className: classes.textFieldInput,
                    value: code,
                    onChange: (e) => setCode(e.target.value),
                  }}
                  className={classes.textField}
                />
              </div>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Minimum Attendance Percentage{' '}
                  <span className={classes.required}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  InputProps={{
                    className: classes.textFieldInput,
                    value: minimumAttendance,
                    onChange: (e) => setMinimumAttendance(e.target.value),
                  }}
                  className={classes.textField}
                />
              </div>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Attendance Type <span className={classes.required}>*</span>
                </Typography>
                <FormControl variant="filled" className={classes.textField}>
                  <Select
                    value={attendanceType}
                    variant="outlined"
                    onChange={(e) => setAttendanceType(e.target.value)}
                    className={classes.select}
                  >
                    <MenuItem value="Daily">Daily</MenuItem>
                    <MenuItem value="Weekly">Weekly</MenuItem>
                    <MenuItem value="Monthly">Monthly</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Total Working Days <span className={classes.required}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  InputProps={{
                    className: classes.textFieldInput,
                    value: totalWorkingDay,
                    onChange: (e) => setTotalWorkingDay(e.target.value),
                  }}
                  className={classes.textField}
                />
              </div>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Syllabus Name <span className={classes.required}>*</span>
                </Typography>
                <FormControl variant="filled" className={classes.textField}>
                  <Select
                    value={syllabusName}
                    variant="outlined"
                    onChange={(e) => setSyllabusName(e.target.value)}
                    className={classes.select}
                  >
                    <MenuItem value="GPA">GPA</MenuItem>
                    <MenuItem value="CCE">CCE</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </CardContent>
            {/* <Typography variant="body2" className={classes.errorText}>
              {error && error.error}
            </Typography> */}
            <Button
              variant="contained"
              color="primary"
              className={classes.savebtn}
              startIcon={!isCourseAdding && <SaveIcon />}
              onClick={onSubmit}
            >
              {isCourseAdding ? <CircularProgress color="secondary" /> : 'Save'}
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Course;
