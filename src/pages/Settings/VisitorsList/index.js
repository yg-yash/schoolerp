import React, { useEffect } from 'react';
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
import * as action from '../../../actions/settings/visitors';
import { useDispatch, useSelector } from 'react-redux';

const VisitorsList = () => {
  const dispatch = useDispatch();
  const { visitors } = useSelector((state) => state.visitorsReducer);

  useEffect(() => {
    dispatch(action.getRequest());
  }, []);

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
                    {visitors &&
                      visitors.map((row, index) => (
                        <TableRow key={index} className={classes.tableRow}>
                          <TableCell component="th" scope="row">
                            {index + 1}
                          </TableCell>
                          <TableCell align="right">{row.category}</TableCell>
                          <TableCell align="right">{row.name}</TableCell>
                          <TableCell align="right">{row.whomToMeet}</TableCell>
                          <TableCell align="right">{row.purpose}</TableCell>
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
