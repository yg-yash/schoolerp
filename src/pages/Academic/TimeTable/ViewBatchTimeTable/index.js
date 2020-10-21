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
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import styles from './styles';

function createData(
  name,
  calories,
  period2,
  period3,
  period4,
  period5,
  period6,
  period7
) {
  return {
    name,
    calories,
    period2,
    period3,
    period4,
    period5,
    period6,
    period7,
  };
}

const rows = [
  createData(
    'Monday',
    'Basic 1 Jahan Jabbar 9:30 AM-10:00 AM',
    'BREAK 10:00AM-10-15AM',
    'Mathmetics Rose Marry Varghwa 11:15AM-11-30AM',
    'Science Lesly Timmy 11:15AM-12:15PM',
    'BREAK 12:15PM-10:30PM',
    'Basic 1 Jahan Jabbar 12:15PM-10:30PM',
    'Mathmetics Rose Mary Vaighan 2:30PM-3:38PM'
  ),
  createData(
    'Monday',
    'Basic 1 Jahan Jabbar 9:30 AM-10:00 AM',
    'BREAK 10:00AM-10-15AM',
    'Mathmetics Rose Marry Varghwa 11:15AM-11-30AM',
    'Science Lesly Timmy 11:15AM-12:15PM',
    'BREAK 12:15PM-10:30PM',
    'Basic 1 Jahan Jabbar 12:15PM-10:30PM',
    'Mathmetics Rose Mary Vaighan 2:30PM-3:38PM'
  ),
  createData(
    'Monday',
    'Basic 1 Jahan Jabbar 9:30 AM-10:00 AM',
    'BREAK 10:00AM-10-15AM',
    'Mathmetics Rose Marry Varghwa 11:15AM-11-30AM',
    'Science Lesly Timmy 11:15AM-12:15PM',
    'BREAK 12:15PM-10:30PM',
    'Basic 1 Jahan Jabbar 12:15PM-10:30PM',
    'Mathmetics Rose Mary Vaighan 2:30PM-3:38PM'
  ),
  createData(
    'Monday',
    'Basic 1 Jahan Jabbar 9:30 AM-10:00 AM',
    'BREAK 10:00AM-10-15AM',
    'Mathmetics Rose Marry Varghwa 11:15AM-11-30AM',
    'Science Lesly Timmy 11:15AM-12:15PM',
    'BREAK 12:15PM-10:30PM',
    'Basic 1 Jahan Jabbar 12:15PM-10:30PM',
    'Mathmetics Rose Mary Vaighan 2:30PM-3:38PM'
  ),
  createData(
    'Monday',
    'Basic 1 Jahan Jabbar 9:30 AM-10:00 AM',
    'BREAK 10:00AM-10-15AM',
    'Mathmetics Rose Marry Varghwa 11:15AM-11-30AM',
    'Science Lesly Timmy 11:15AM-12:15PM',
    'BREAK 12:15PM-10:30PM',
    'Basic 1 Jahan Jabbar 12:15PM-10:30PM',
    'Mathmetics Rose Mary Vaighan 2:30PM-3:38PM'
  ),
];

const AssignCourse = ({ width }) => {
  const [userType, setUserType] = useState('');

  const classes = styles();
  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Academic</Typography>
          <ArrowRight />
          <Typography>Time Table</Typography>
          <ArrowRight />
          <Typography>Batch Time Table</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container} spacing={2}>
        <Grid item xs={12}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.cardHeaderTitle}>
                  View Time Table
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent className={classes.topCard}>
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
                      <MenuItem value="india">STD I_cgpa</MenuItem>
                      <MenuItem value="australia">STD II_gpa</MenuItem>
                      <MenuItem value="usa">STD III_gpar</MenuItem>
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
                      <MenuItem value="india">A</MenuItem>
                      <MenuItem value="australia">B</MenuItem>
                      <MenuItem value="usa">C</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Time Table Name <span className={classes.required}>*</span>
                  </Typography>
                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={userType}
                      variant="outlined"
                      onChange={(e) => setUserType(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="india">STD I_gpa</MenuItem>
                      <MenuItem value="australia">STD II_gpa</MenuItem>
                      <MenuItem value="usa">STD III_gpa</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div style={{ marginRight: 10 }}>
                  <Button variant="contained" color="primary">
                    Show Timetable
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.cardHeaderTitle}>
                  View Timetable
                </Typography>
              }
              className={classes.cardHeader}
            />
            <Table className={classes.table} aria-label="simple table">
              <TableHead className={classes.tableHeader}>
                <TableRow>
                  <TableCell>Weekdays</TableCell>
                  <TableCell>Period-1</TableCell>
                  <TableCell>Period-2</TableCell>
                  <TableCell>Period-3</TableCell>
                  <TableCell>Period-4</TableCell>
                  <TableCell>Period-5</TableCell>
                  <TableCell>Period-6</TableCell>
                  <TableCell>Period-7</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={row.name}
                    className={
                      index % 2 === 0 ? classes.tableRow : classes.tableHeader
                    }
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.calories}</TableCell>
                    <TableCell>{row.period2}</TableCell>
                    <TableCell>{row.period3}</TableCell>
                    <TableCell>{row.period4}</TableCell>
                    <TableCell>{row.period5}</TableCell>
                    <TableCell>{row.period6}</TableCell>
                    <TableCell>{row.period7}</TableCell>
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
