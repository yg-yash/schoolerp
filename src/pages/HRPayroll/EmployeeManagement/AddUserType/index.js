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
import styles from './styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../../actions/userType';

const AssignCourse = () => {
  const [title, setTitle] = useState('');
  const classes = styles();

  const dispatch = useDispatch();
  const { userTypes, error, clearFields } = useSelector(
    (state) => state.usertypeReducer
  );

  const { isUserTypeAdding } = useSelector((state) => state.loadingReducer);

  useEffect(() => {
    dispatch(actions.getRequest());
  }, []);

  useEffect(() => {
    if (clearFields) {
      setTitle('');
    }
  }, [clearFields]);

  const onSubmit = () => {
    dispatch(actions.addRequest({ name: title }));
  };

  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>HR/Payroll</Typography>
          <ArrowRight />
          <Typography>Employee Management</Typography>
          <ArrowRight />
          <Typography>Add User Type</Typography>
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
                  Add User Type
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  User Type
                  <span className={classes.required}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  InputProps={{
                    className: classes.textFieldInput,
                  }}
                  className={classes.textField}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <Typography variant="body2" className={classes.errorText}>
                {error && error.error}
              </Typography>

              <Button
                variant="contained"
                color="primary"
                className={classes.saveBtn}
                startIcon={!isUserTypeAdding && <SaveIcon />}
                onClick={onSubmit}
              >
                {isUserTypeAdding ? (
                  <CircularProgress color="secondary" />
                ) : (
                  'Save'
                )}
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
                  <TableCell>User Type</TableCell>
                  <TableCell>Manage</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userTypes &&
                  userTypes.map((row, index) => (
                    <TableRow
                      key={index}
                      className={
                        index % 2 === 0 ? classes.tableRow : classes.tableHeader
                      }
                    >
                      <TableCell component="th" scope="row">
                        {index + 1}
                      </TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>
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
