import React, { useState } from 'react';
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
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

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
          <Typography>HR/Payroll</Typography>
          <ArrowRight />
          <Typography>Leave Management</Typography>
          <ArrowRight />
          <Typography>Leave Details</Typography>
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
                  Leave Details
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Leave Category <span className={classes.required}>*</span>
                </Typography>
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
                <Typography variant="body2">
                  Designation <span className={classes.required}>*</span>
                </Typography>
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
                <Typography variant="body2">
                  Leave Count
                  <span className={classes.required}>*</span>
                </Typography>
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
              <Button
                variant="contained"
                color="primary"
                className={classes.saveBtn}
                startIcon={<SaveIcon />}
              >
                Create
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
                  <TableCell align="right">Leave Category</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Manage</TableCell>
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
                    <TableCell align="right">{row.title}</TableCell>
                    <TableCell align="right">{row.course}</TableCell>
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
