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
import { Wrapper } from '../../../components';
import styles from './styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PrintIcon from '@material-ui/icons/Print';
import EditIcon from '@material-ui/icons/Edit';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

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

  const classes = styles();
  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Report</Typography>
          <ArrowRight />
          <Typography>Absentees</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.cardHeaderTitle}>
                  Absentees(School Wise)
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent>
              <div className={classes.row}>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Date <span className={classes.required}>*</span>
                  </Typography>
                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={userType}
                      variant="outlined"
                      onChange={(e) => setUserType(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="india">Course 1</MenuItem>
                      <MenuItem value="australia">Course 2</MenuItem>
                      <MenuItem value="usa">Course 3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <Button variant="contained" color="primary">
                  Go
                </Button>
                <Button
                  startIcon={<PrintIcon />}
                  variant="contained"
                  color="secondary"
                  className={classes.saveBtn}
                >
                  Print Report
                </Button>
              </div>
              <div className={classes.row}>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Course <span className={classes.required}>*</span>
                  </Typography>
                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={userType}
                      variant="outlined"
                      onChange={(e) => setUserType(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="india">Course 1</MenuItem>
                      <MenuItem value="australia">Course 2</MenuItem>
                      <MenuItem value="usa">Course 3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Batch <span className={classes.required}>*</span>
                  </Typography>
                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={userType}
                      variant="outlined"
                      onChange={(e) => setUserType(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="india">Course 1</MenuItem>
                      <MenuItem value="australia">Course 2</MenuItem>
                      <MenuItem value="usa">Course 3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} style={{ marginTop: 30 }}>
          <CardHeader
            title={
              <Typography variant="h6" className={classes.cardHeaderTitle}>
                Absentees Report - 2016-8-10
              </Typography>
            }
            className={classes.cardHeader}
          />
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
