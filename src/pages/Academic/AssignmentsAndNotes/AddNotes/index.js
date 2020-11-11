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
import styles from './styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import EditIcon from '@material-ui/icons/Edit';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useSelector, useDispatch } from 'react-redux';
import * as batchActions from '../../../../actions/batch';
import * as courseActions from '../../../../actions/course';
import * as actions from '../../../../actions/notes';
import * as subjectActions from '../../../../actions/academic/subjects';

const AssignCourse = ({ width }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState('');
  const [courseId, setCourseId] = useState('');
  const [batchId, setBatchId] = useState('');
  const [subjectId, setSubjectId] = useState('');

  const getCoursesBatch = (id) => {
    dispatch(batchActions.getCourseBatchRequest(id));
  };

  const getSpecificSubject = (batchId) => {
    dispatch(subjectActions.getCourseBatchRequest(courseId, batchId));
  };
  const dispatch = useDispatch();

  const { courses } = useSelector((state) => state.couseReducer);
  const { coursesBatch } = useSelector((state) => state.batchReducer);
  const { list } = useSelector((state) => state.noteReducer);
  const { isNoteAdding } = useSelector((state) => state.loadingReducer);
  const { specificSubjects } = useSelector((state) => state.subjectReducer);

  const classes = styles();

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onSubmit = () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', file);
    formData.append('course', courseId);
    formData.append('batch', batchId);
    formData.append('subject', subjectId);
    dispatch(actions.addRequest(formData));
  };

  useEffect(() => {
    dispatch(actions.getRequest());
  }, []);

  useEffect(() => {
    dispatch(courseActions.getRequest());
  }, []);

  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Settings</Typography>
          <ArrowRight />
          <Typography>Assignment & Notes</Typography>
          <ArrowRight />
          <Typography>Add Note</Typography>
        </Toolbar>
      </AppBar>
      <Grid
        container
        className={classes.container}
        justify="space-between"
        display="flex"
        spacing={2}
      >
        <Grid item xs={12} md={6}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.cardHeaderTitle}>
                  Add Note
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Title <span className={classes.required}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  InputProps={{
                    className: classes.textFieldInput,
                    value: title,
                    onChange: (e) => setTitle(e.target.value),
                  }}
                  className={classes.textField}
                />
              </div>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Description <span className={classes.required}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  InputProps={{
                    className: classes.textFieldInput,
                  }}
                  className={classes.textField}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Attachment <span className={classes.required}>*</span>
                </Typography>
                <div className={classes.btnRow}>
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="fees-allocation-upload"
                    type="file"
                    hidden
                    onChange={onFileChange}
                  />
                  <label htmlFor="fees-allocation-upload">
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.uploadBtn}
                      component="span"
                      startIcon={<AttachFileIcon />}
                    >
                      Choose File
                    </Button>
                  </label>
                  <Typography variant="body2">
                    {file ? file.name : 'No File Choosen'}
                  </Typography>
                </div>
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
                      getSpecificSubject(e.target.value);
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
                  Subject <span className={classes.required}>*</span>
                </Typography>
                <FormControl variant="filled" className={classes.textField}>
                  <Select
                    value={subjectId}
                    variant="outlined"
                    onChange={(e) => {
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
              </div>
              <Button
                variant="contained"
                color="primary"
                className={classes.saveBtn}
                startIcon={!isNoteAdding && <SaveIcon />}
                onClick={onSubmit}
              >
                {isNoteAdding ? <CircularProgress color="secondary" /> : 'Save'}
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <TableContainer component={Card}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead className={classes.tableHeader}>
                <TableRow>
                  <TableCell>SI.No.</TableCell>
                  <TableCell align="right">Title</TableCell>
                  <TableCell align="right">Course</TableCell>
                  <TableCell align="right">Batch</TableCell>
                  <TableCell align="right">Subject</TableCell>
                  <TableCell align="right">Date of Submission</TableCell>
                  <TableCell align="right">Manage</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {list &&
                  list.map((row, index) => (
                    <TableRow
                      key={index}
                      className={
                        index % 2 === 0 ? classes.tableRow : classes.tableHeader
                      }
                    >
                      <TableCell component="th" scope="row">
                        {index  +1}
                      </TableCell>
                      <TableCell align="right">{row.title}</TableCell>
                      <TableCell align="right">{row.course}</TableCell>
                      <TableCell align="right">{row.batch}</TableCell>
                      <TableCell align="right">{row.subject}</TableCell>
                      <TableCell align="right">
                        {row.dateOfSubmission}
                      </TableCell>
                      <TableCell align="right">
                        <EditIcon color="primary" />
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default AssignCourse;
