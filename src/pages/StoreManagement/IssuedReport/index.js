import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ArrowRight from '@material-ui/icons/ArrowRight';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { Wrapper } from '../../../components';
import styles from './styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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

const AssignCourse = () => {
  const classes = styles();

  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Store Management</Typography>
          <ArrowRight />
          <Typography>Issued Report</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <CardHeader
            title={
              <Typography variant="h6" className={classes.cardHeaderTitle}>
                Issued Report
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
