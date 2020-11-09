import React, { useState, useEffect } from 'react';
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
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import * as actions from '../../../../actions/batch';
import * as courseActions from '../../../../actions/course';
import { useSelector, useDispatch } from 'react-redux';

const Batch = () => {
  const classes = styles();
  const [batchName, setBatchName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const [maximumStudents, setMaximumStudents] = useState('');
  const [courseId, setCourseId] = useState('');

  const dispatch = useDispatch();

  const { courses } = useSelector((state) => state.couseReducer);
  const { error } = useSelector((state) => state.batchReducer);
  const { isCoursesLoading, isBatchAdding } = useSelector(
    (state) => state.loadingReducer
  );

  useEffect(() => {
    dispatch(courseActions.getRequest());
  }, []);

  const onSubmit = () => {
    const data = {
      batchName,
      startDate,
      endDate,
      maximumStudents: Number(maximumStudents),
      course: courseId,
    };
    dispatch(actions.addRequest(data));
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Wrapper padding={false}>
        <AppBar position="static" color="primary">
          <Toolbar className={classes.toolBar}>
            <Typography>Academic</Typography>
            <ArrowRight />
            <Typography>Course & Batch</Typography>
            <ArrowRight />
            <Typography>Batch</Typography>
          </Toolbar>
        </AppBar>
        <Grid container className={classes.container}>
          <Grid item xs={10} className={classes.column}>
            <Card elevation={3} className={classes.card}>
              <CardHeader
                title={
                  <Typography variant="h6" className={classes.headingText}>
                    Add Batch
                  </Typography>
                }
                className={classes.cardHeader}
              />
              <CardContent>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Course <span className={classes.required}>*</span>
                  </Typography>
                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={courseId}
                      variant="outlined"
                      onChange={(e) => setCourseId(e.target.value)}
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
                    Batch Name <span className={classes.required}>*</span>
                  </Typography>
                  <TextField
                    variant="outlined"
                    InputProps={{
                      className: classes.textFieldInput,
                      value: batchName,
                      onChange: (e) => setBatchName(e.target.value),
                    }}
                    className={classes.textField}
                  />
                </div>
                <div className={`${classes.inputContainer}`}>
                  <Typography variant="body2">
                    Start Date <span className={classes.required}>*</span>
                  </Typography>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    // label="Date picker inline"
                    value={startDate}
                    onChange={(e) => setStartDate(e)}
                    className={classes.textField}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </div>
                <div className={`${classes.inputContainer}`}>
                  <Typography variant="body2">
                    End Date <span className={classes.required}>*</span>
                  </Typography>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    // label="Date picker inline"
                    value={endDate}
                    onChange={(e) => setendDate(e)}
                    className={classes.textField}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Maximum Number of Students{' '}
                    <span className={classes.required}>*</span>
                  </Typography>
                  <TextField
                    variant="outlined"
                    InputProps={{
                      className: classes.textFieldInput,
                      value: maximumStudents,
                      onChange: (e) => setMaximumStudents(e.target.value),
                    }}
                    className={classes.textField}
                  />
                </div>
              </CardContent>
              <Typography variant="body2" className={classes.errorText}>
                {error && error.error}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.savebtn}
                startIcon={!isBatchAdding && <SaveIcon />}
                onClick={onSubmit}
              >
                {isBatchAdding ? (
                  <CircularProgress color="secondary" />
                ) : (
                  'Save'
                )}
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Wrapper>
    </MuiPickersUtilsProvider>
  );
};

export default Batch;
