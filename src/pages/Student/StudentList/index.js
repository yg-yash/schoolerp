import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ArrowRight from '@material-ui/icons/ArrowRight';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { Wrapper } from '../../../components';
import styles from './styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';

function createData(no, title, course, batch, subject, dateOfSubmission) {
  return { no, title, course, batch, subject, dateOfSubmission };
}

const rows = [
  createData(
    1,
    'testdyhuug',
    'STD II',
    'A',
    'English-ENG1001',
    'e1001-Malavika S Pillai'
  ),
  createData(
    2,
    'Maths asssignment 4',
    'STD II',
    'A',
    'Maths-ENG1001',
    'e1001- Malavika S Pillai'
  ),
];

const AssignCourse = ({ width }) => {
  const [userType, setUserType] = useState('');
  const [checked, setChecked] = React.useState([0]);
  const [title, setTitle] = useState('');
  const [list, setList] = useState([
    'STD I',
    'STD II',
    'STD III',
    'STD IV',
    'STD V',
    'STD VI',
    'STD VII',
    'STD VIII',
    'STD IX',
    'STD X',
    'STD XI',
    'STD XII',
  ]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const classes = styles();
  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Student</Typography>
          <ArrowRight />
          <Typography>Student List</Typography>
        </Toolbar>
      </AppBar>
      <Grid
        container
        className={classes.container}
        justify="space-between"
        display="flex"
        spacing={2}
      >
        <Grid item xs={12}>
          <div className={classes.row}>
            <div className={classes.inputContainer}>
              <FormControl variant="filled" className={classes.textField}>
                <Select
                  value={userType}
                  variant="outlined"
                  onChange={(e) => setUserType(e.target.value)}
                  className={classes.select}
                >
                  <MenuItem value="india">A</MenuItem>
                  <MenuItem value="australia">B</MenuItem>
                  <MenuItem value="usa">C</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.inputContainer}>
              <FormControl variant="filled" className={classes.textField}>
                <Select
                  value={userType}
                  variant="outlined"
                  onChange={(e) => setUserType(e.target.value)}
                  className={classes.select}
                >
                  <MenuItem value="india">A</MenuItem>
                  <MenuItem value="australia">B</MenuItem>
                  <MenuItem value="usa">C</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.inputContainer}>
              <TextField
                variant="outlined"
                InputProps={{
                  className: classes.textFieldInput,
                }}
                className={classes.textField}
                value={title}
                onChange={(e) => setTitle(e.target.vallue)}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Card}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead className={classes.tableHeader}>
                <TableRow>
                  <TableCell>SI.No.</TableCell>
                  <TableCell>Leave Category</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Manage</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={row.no}
                    className={
                      index % 2 === 0 ? classes.tableRow : classes.tableHeader
                    }
                  >
                    <TableCell component="th" scope="row">
                      {row.no}
                    </TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.course}</TableCell>
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
