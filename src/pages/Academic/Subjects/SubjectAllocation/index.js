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
import SaveIcon from '@material-ui/icons/Save';
// import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector, useDispatch } from 'react-redux';
import * as departmentActions from '../../../../actions/departments';
import * as employeeActions from '../../../../actions/employee';
import * as courseActions from '../../../../actions/course';
import * as batchActions from '../../../../actions/batch';
import * as subjectActions from '../../../../actions/academic/subjects';

const Subjects = () => {
  const classes = styles();
  const [departmentId, setDepartmentId] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [courseId, setCourseId] = useState('');
  const [batchId, setBatchId] = useState('');
  const [subjectId, setSubjectId] = useState('');

  const dispatch = useDispatch();

  const { list } = useSelector((state) => state.departmentReducer);
  const { employeesByDepartment } = useSelector(
    (state) => state.employeeReducer
  );
  const { coursesBatch } = useSelector((state) => state.batchReducer);
  const { courses } = useSelector((state) => state.couseReducer);
  const { specificSubjects } = useSelector((state) => state.subjectReducer);

  useEffect(() => {
    dispatch(departmentActions.getRequest());
    dispatch(courseActions.getRequest());
  }, []);

  const getEmployees = (id) => {
    dispatch(employeeActions.getEmployeeByDepartmentRequest(id));
  };

  const getCoursesBatch = (id) => {
    dispatch(batchActions.getCourseBatchRequest(id));
  };

  const getSubject = (batchId) => {
    dispatch(subjectActions.getCourseBatchRequest(courseId, batchId));
  };

  const onSubmit = () => {
    const data = {
      department: departmentId,
      employee: employeeId,
      course: courseId,
      batch: batchId,
      subject: subjectId,
    };
    dispatch(subjectActions.allocateRequest(data));
  };
  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Academic</Typography>
          <ArrowRight />
          <Typography>Subjects</Typography>
          <ArrowRight />
          <Typography>Subject Allocation</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container}>
        <Grid item xs={10} className={classes.column}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.headingText}>
                  Subject Allocation
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Department <span className={classes.required}>*</span>
                </Typography>
                <FormControl variant="filled" className={classes.textField}>
                  <Select
                    value={departmentId}
                    variant="outlined"
                    onChange={(e) => {
                      setDepartmentId(e.target.value);
                      getEmployees(e.target.value);
                    }}
                    className={classes.select}
                  >
                    {list && list.length < 1 && (
                      <MenuItem value="none" disabled>
                        No Department
                      </MenuItem>
                    )}
                    {list &&
                      list.map((item, index) => (
                        <MenuItem value={item._id} key={index}>
                          {item.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </div>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Employee Name <span className={classes.required}>*</span>
                </Typography>
                <FormControl variant="filled" className={classes.textField}>
                  <Select
                    value={employeeId}
                    variant="outlined"
                    onChange={(e) => setEmployeeId(e.target.value)}
                    className={classes.select}
                  >
                    {employeesByDepartment && employeesByDepartment.length < 1 && (
                      <MenuItem value="none" disabled>
                        No Employee
                      </MenuItem>
                    )}
                    {employeesByDepartment &&
                      employeesByDepartment.map((item, index) => (
                        <MenuItem value={item._id} key={index}>
                          {item.firstName}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </div>
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
                    {courses && courses.length < 1 && (
                      <MenuItem value="none" disabled>
                        No Courses
                      </MenuItem>
                    )}
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
                      getSubject(e.target.value);
                    }}
                    className={classes.select}
                  >
                    {coursesBatch && coursesBatch.length < 1 && (
                      <MenuItem value="none" disabled>
                        No Batch
                      </MenuItem>
                    )}
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
                  Subject <span className={classes.required}>*</span>
                </Typography>
                <FormControl variant="filled" className={classes.textField}>
                  <Select
                    value={subjectId}
                    variant="outlined"
                    onChange={(e) => setSubjectId(e.target.value)}
                    className={classes.select}
                  >
                    {specificSubjects && specificSubjects.length < 1 && (
                      <MenuItem value="none" disabled>
                        No Subject
                      </MenuItem>
                    )}
                    {specificSubjects &&
                      specificSubjects.map((item, index) => (
                        <MenuItem value={item._id} key={index}>
                          {item.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </div>
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              className={classes.savebtn}
              startIcon={<SaveIcon />}
              onClick={onSubmit}
            >
              Save
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Subjects;
