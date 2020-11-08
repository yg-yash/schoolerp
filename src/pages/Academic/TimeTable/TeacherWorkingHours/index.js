import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
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

function createData(name, calories, period2) {
  return {
    name,
    calories,
    period2,
  };
}

const rows = [
  createData(1, 'Rose Mary Vaughan', 9),
  createData(2, 'Sayana Hankin', 9),
  createData(3, 'Melanie Smith', 9),
];

const TeacherWorkingGours = ({ width }) => {
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
          <Typography>Team Working Hours</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container} spacing={2}>
        <Grid item xs={12}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.cardHeaderTitle}>
                  Select Course & Batch
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent className={classes.topCard}>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Department <span className={classes.required}>*</span>
                </Typography>
                <FormControl variant="filled" className={classes.textField}>
                  <Select
                    value={userType}
                    variant="outlined"
                    onChange={(e) => setUserType(e.target.value)}
                    className={classes.select}
                  >
                    <MenuItem value="india">Maths Department</MenuItem>
                    <MenuItem value="australia">English Department</MenuItem>
                    <MenuItem value="usa">GK Department</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.cardHeaderTitle}>
                  Teachers Working Hour Calculation
                </Typography>
              }
              className={classes.cardHeader}
            />
            <Table className={classes.table} aria-label="simple table">
              <TableHead className={classes.tableHeader}>
                <TableRow>
                  <TableCell>SNo.</TableCell>
                  <TableCell>Teacher Name</TableCell>
                  <TableCell>Hours</TableCell>
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

export default TeacherWorkingGours;
