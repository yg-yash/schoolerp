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
import { Wrapper } from '../../../components';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SendIcon from '@material-ui/icons/Send';
import * as departmentAction from '../../../actions/departments';
import * as usersAction from '../../../actions/settings/users';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData(1, 'Amit T', 'Twewdsaqw'),
  createData(1, 'Amit T', 'Twewdsaqw'),
];

const AssignCourse = () => {
  const [userType, setUserType] = useState('');

  const { list } = useSelector((state) => state.departmentReducer);
  const { users } = useSelector((state) => state.usersReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(departmentAction.getRequest());
  }, []);

  const getUsers = (id) => {
    dispatch(usersAction.getRequest(id));
  };

  const classes = styles();
  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Settings</Typography>
          <ArrowRight />
          <Typography>Users</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container} spacing={2}>
        <Grid item xs={12}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.cardHeaderTitle}>
                  Users
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent className={classes.topCard}>
              <div className={classes.row}>
                {/* <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Users <span className={classes.required}>*</span>
                  </Typography>
                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={userType}
                      variant="outlined"
                      onChange={(e) => setUserType(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="india">Employee</MenuItem>
                      <MenuItem value="australia">Guradian</MenuItem>
                      <MenuItem value="usa">Teacher</MenuItem>
                    </Select>
                  </FormControl>
                </div> */}
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Department <span className={classes.required}>*</span>
                  </Typography>

                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={userType}
                      variant="outlined"
                      onChange={(e) => {
                        setUserType(e.target.value);
                        getUsers(e.target.value);
                      }}
                      className={classes.select}
                    >
                      {list &&
                        list.map((item, index) => (
                          <MenuItem value={item._id}>{item.name}</MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div style={{ flex: 0.5 }}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.saveBtn}
                  startIcon={<SendIcon />}
                >
                  Send SMS Alert
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
                  Employee List
                </Typography>
              }
              className={classes.cardHeader}
            />
            <Table className={classes.table} aria-label="simple table">
              <TableHead className={classes.tableHeader}>
                <TableRow>
                  <TableCell>Employee Code</TableCell>
                  <TableCell>Employee name</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>Password</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users &&
                  users.map((row, index) => (
                    <TableRow
                      key={index}
                      className={
                        index % 2 === 0 ? classes.tableRow : classes.tableHeader
                      }
                    >
                      <TableCell component="th" scope="row">
                        {row.code}
                      </TableCell>
                      <TableCell>{row.firstName}</TableCell>
                      <TableCell>{row.email}</TableCell>
                      <TableCell>
                        <FormControlLabel
                          value="reset"
                          control={<Radio />}
                          label="Reset"
                        />
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
