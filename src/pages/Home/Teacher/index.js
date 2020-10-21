import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Wrapper } from '../../../components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Bar, Bubble, Pie } from 'react-chartjs-2';
import { mockDashboard, mockFeed } from '../../../utils/mock';
import styles from './styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function createData(name, calories, period2) {
  return {
    name,
    calories,
    period2,
  };
}

const rows = [
  createData(
    'Monday',
    'Basic 1 Jahan Jabbar 9:30 AM-10:00 AM',
    'Basic 1 Jahan Jabbar 9:30 AM-10:00 AM'
  ),
];

const AddInstitutionDetails = () => {
  const classes = styles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => setAnchorEl(event.currentTarget);

  return (
    <Wrapper padding={false}>
      {/* <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Academic</Typography>
          <ArrowRight />
          <Typography>Course & Batch</Typography>
          <ArrowRight />
          <Typography>Course</Typography>
        </Toolbar>
      </AppBar> */}
      <Grid container className={classes.container}>
        <Grid
          container
          direction="row"
          justify="space-between"
          style={{ width: '90%' }}
        >
          <Grid item xs={8} md={7}>
            <TableContainer component={Card}>
              <CardHeader
                title={
                  <Typography variant="h6" className={classes.cardHeaderTitle}>
                    Calendar
                  </Typography>
                }
                className={classes.cardHeader}
              />
              <Table className={classes.table} aria-label="simple table">
                {/* <TableHead className={classes.tableHeader}>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Task Description</TableCell>
                    <TableCell>Priority</TableCell>
                    <TableCell>Task Date</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead> */}
                {/* <TableBody>
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
                  </TableRow>
                ))}
              </TableBody> */}
              </Table>
            </TableContainer>
            <TableContainer component={Card} style={{ marginTop: 10 }}>
              <CardHeader
                title={
                  <Typography variant="h6" className={classes.cardHeaderTitle}>
                    Task Manager
                  </Typography>
                }
                className={classes.cardHeader}
              />
              <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tableHeader}>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Task Description</TableCell>
                    <TableCell>Priority</TableCell>
                    <TableCell>Task Date</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                {/* <TableBody>
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
                  </TableRow>
                ))}
              </TableBody> */}
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={4} className={classes.rightCard}>
            <Card elevation={3} className={classes.smallCard}>
              <CardHeader
                className={classes.cardHeader}
                title={
                  <Typography variant="h6" className={classes.cardHeaderTitle}>
                    Last Leave Taken
                  </Typography>
                }
              />
              <CardContent className={classes.smallCardContent}>
                <Typography variant="body1">Casual leave123</Typography>
                <Typography variant="body2" style={{ marginTop: 10 }}>
                  Date:2018-Jun-14 to 2018-Jun-04
                </Typography>
                <Typography variant="body2" style={{ marginTop: 10 }}>
                  Reason: Casual Leave
                </Typography>
              </CardContent>
            </Card>
            <Card
              elevation={3}
              className={classes.smallCard}
              style={{ marginTop: 10 }}
            >
              <CardHeader
                className={classes.cardHeader}
                title={
                  <Typography variant="h6" className={classes.cardHeaderTitle}>
                    Assigned Courses
                  </Typography>
                }
              />
              <CardContent className={classes.smallCardContent}>
                <Typography variant="body2" style={{ marginTop: 10 }}>
                  Qaitbayschool - 16th Batch{'\n'} Business Management - A
                </Typography>
                <Typography variant="body2" style={{ marginTop: 10 }}>
                  Qaitbayschool - 16th Batch{'\n'} Business Management - A
                </Typography>
                <Typography variant="body2" style={{ marginTop: 10 }}>
                  Qaitbayschool - 16th Batch{'\n'} Business Management - A
                </Typography>
                <Typography variant="body2" style={{ marginTop: 10 }}>
                  Qaitbayschool - 16th Batch{'\n'} Business Management - A
                </Typography>
                <Typography variant="body2" style={{ marginTop: 10 }}>
                  Qaitbayschool - 16th Batch{'\n'} Business Management - A
                </Typography>
                <Typography variant="body2" style={{ marginTop: 10 }}>
                  Qaitbayschool - 16th Batch{'\n'} Business Management - A
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default AddInstitutionDetails;
