import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
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
import { useSelector, useDispatch } from 'react-redux';
import * as batchActions from '../../../../actions/batch';
import * as courseActions from '../../../../actions/course';
import * as actions from '../../../../actions/classTeacher';
import * as teacherActions from '../../../../actions/teachers';

const ClassTeacherAllocation = () => {
  const classes = styles();
  const [courseId, setCourseId] = useState('');
  const [batchId, setBatchId] = useState('');
  const [teacherId, setTeacherId] = useState('');

  const { courses } = useSelector((state) => state.couseReducer);
  const { coursesBatch } = useSelector((state) => state.batchReducer);
  const { isClassTeacherAdding } = useSelector((state) => state.loadingReducer);
  const { teachers } = useSelector((state) => state.teacherReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(courseActions.getRequest());
    dispatch(teacherActions.getRequest());
  }, []);

  const getCoursesBatch = (id) => {
    dispatch(batchActions.getCourseBatchRequest(id));
  };

  const onSubmit = () => {
    const data = {
      course: courseId,
      batch: batchId,
      classTeacher: teacherId,
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
          <Typography>Class Teacher Allocation</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container}>
        <Grid item xs={10} className={classes.column}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.headingText}>
                  Class Teacher Allocation
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
                    onChange={(e) => {
                      setCourseId(e.target.value);
                      getCoursesBatch(e.target.value);
                    }}
                    className={classes.select}
                  >
                    {courses &&
                      courses.map((item, index) => (
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
                    }}
                    className={classes.select}
                  >
                    {coursesBatch &&
                      coursesBatch.map((item, index) => (
                        <MenuItem value={item._id} key={index}>
                          {item.batchName}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </div>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Class Teacher <span className={classes.required}>*</span>
                </Typography>
                <FormControl variant="filled" className={classes.textField}>
                  <Select
                    value={teacherId}
                    variant="outlined"
                    onChange={(e) => setTeacherId(e.target.value)}
                    className={classes.select}
                  >
                    {teachers ? (
                      teachers.length < 1 ? (
                        <MenuItem value="">
                          <em>No Teacher</em>
                        </MenuItem>
                      ) : (
                        teachers.map((item, index) => (
                          <MenuItem
                            value={item._id}
                            key={index}
                          >{`${item.firstName} ${item.lastName}`}</MenuItem>
                        ))
                      )
                    ) : null}
                  </Select>
                </FormControl>
              </div>
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              className={classes.savebtn}
              startIcon={!isClassTeacherAdding && <SaveIcon />}
              onClick={onSubmit}
            >
              {isClassTeacherAdding ? (
                <CircularProgress color="secondary" />
              ) : (
                'Save'
              )}
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default ClassTeacherAllocation;
