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
import * as courseActions from '../../../../actions/course';
import * as batchActions from '../../../../actions/batch';
import * as subjectActions from '../../../../actions/academic/subjects';
import { useSelector, useDispatch } from 'react-redux';

const Subjects = () => {
  const classes = styles();
  const [batchId, setBatchId] = useState('');
  const [courseId, setCourseId] = useState('');
  const [subjectIds, setSubejctIds] = useState([]);
  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setSubejctIds(value);
  };
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.couseReducer);
  const { coursesBatch } = useSelector((state) => state.batchReducer);
  const { subjects } = useSelector((state) => state.subjectReducer);
  const { isSubjectAssign } = useSelector((state) => state.loadingReducer);

  useEffect(() => {
    dispatch(courseActions.getRequest());
    dispatch(subjectActions.getRequest());
  }, []);

  const getCoursesBatch = (id) => {
    dispatch(batchActions.getCourseBatchRequest(id));
  };

  const onSubmit = () => {
    const data = {
      course: courseId,
      batch: batchId,
      subjects: subjectIds,
    };
    dispatch(subjectActions.assignRequest(data));
  };

  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Academic</Typography>
          <ArrowRight />
          <Typography>Subjects</Typography>
          <ArrowRight />
          <Typography>Assign Subject</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container}>
        <Grid item xs={10} className={classes.column}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.headingText}>
                  Assign Subject
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
                  Subject <span className={classes.required}>*</span>
                </Typography>
                <FormControl className={classes.textField}>
                  <Select
                    multiple
                    native
                    value={subjectIds}
                    onChange={handleChangeMultiple}
                  >
                    {subjects.map((item, index) => (
                      <option
                        key={index}
                        value={item._id}
                        style={{ margin: 10, padding: 10 }}
                      >
                        {`${item.name}-${item.code}`}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              className={classes.savebtn}
              startIcon={!isSubjectAssign && <SaveIcon />}
              onClick={onSubmit}
            >
              {isSubjectAssign ? (
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

export default Subjects;
