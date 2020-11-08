import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Wrapper } from '../../../components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Bar, Pie } from 'react-chartjs-2';
import { mockDashboard } from '../../../utils/mock';
import styles from './styles';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Student = () => {
  const classes = styles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => setAnchorEl(event.currentTarget);

  return (
    <Wrapper padding={false}>
      <Grid container className={classes.container}>
        <Grid
          container
          direction="row"
          justify="space-between"
          style={{ width: '90%' }}
        >
          <Grid item xs={7} md={7}>
            <Card>
              <CardHeader
                subheader={mockDashboard[0].title}
                action={
                  <IconButton onClick={handleClick}>
                    <MoreVertIcon />
                  </IconButton>
                }
              />
              <CardContent>
                <Bar
                  data={mockDashboard[0].data}
                  height={mockDashboard[0].height}
                  options={mockDashboard[0].options}
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4} className={classes.rightCard}>
            <Card elevation={3} className={classes.smallCard}>
              <CardContent className={classes.smallCardContent}>
                <Typography variant="body1" style={{ marginBottom: 10 }}>
                  Attendance
                </Typography>
                <Pie
                  data={mockDashboard[0].data}
                  height={mockDashboard[0].height}
                  options={mockDashboard[0].options}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item xs={11} style={{ marginTop: 20 }}>
          <TableContainer component={Card}>
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
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Student;
