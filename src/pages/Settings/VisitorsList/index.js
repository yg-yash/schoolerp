import React from 'react';
import AppBar from '@material-ui/core/AppBar';
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

function createData(name, calories, fat, carbs, protein, status) {
  return { name, calories, fat, carbs, protein, status };
}

const rows = [
  createData(1, 'Vendors', 'Vendor', 'Principal', 'Payment collection'),
  createData(
    2,
    'School Staff',
    'School Staff',
    'Administrator office',
    'Student performance'
  ),
  createData(3, 'Parents', 'Parent', 'Principal', 'For admission'),
];

const VisitorsList = ({ width }) => {
  const classes = styles();
  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Settings</Typography>
          <ArrowRight />
          <Typography>Visitors</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.cardHeaderTitle}>
                  Visitors List
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent>
              <TableContainer component={Card}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead className={classes.tableHeader}>
                    <TableRow>
                      <TableCell className={classes.tableHeading}>
                        SNo.
                      </TableCell>
                      <TableCell align="right" className={classes.tableHeading}>
                        Visitor category
                      </TableCell>
                      <TableCell align="right" className={classes.tableHeading}>
                        Visitor
                      </TableCell>
                      <TableCell align="right" className={classes.tableHeading}>
                        Whom to visit
                      </TableCell>
                      <TableCell align="right" className={classes.tableHeading}>
                        Purpose
                      </TableCell>
                      <TableCell align="right" className={classes.tableHeading}>
                        Course
                      </TableCell>
                      <TableCell align="right" className={classes.tableHeading}>
                        Batch
                      </TableCell>
                      <TableCell align="right" className={classes.tableHeading}>
                        Student name
                      </TableCell>
                      <TableCell align="right" className={classes.tableHeading}>
                        Teacher
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow key={row.name} className={classes.tableRow}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default VisitorsList;
