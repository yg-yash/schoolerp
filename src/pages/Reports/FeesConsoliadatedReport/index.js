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
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InfoIcon from '@material-ui/icons/Info';
import { Bar, Bubble, Pie } from 'react-chartjs-2';
import { mockDashboard, mockFeed } from '../../../utils/mock';

let id = 0;
function createData(name, date, progress) {
  id += 1;
  return { id, name, date, progress };
}

const data = [
  createData('UI prototyping', 'January 23', 67),
  createData('Design', 'February 2', 87),
  createData('Development', 'March 30', 54),
  createData('Testing and delivery', 'April 12', 34),
  createData('Ongoing maintanance', 'May 28', 56),
  createData('Extensive review', 'December 3', 56),
  createData('Extensive testing', 'December 25', 56),
];

const AssignCourse = ({ width }) => {
  const [userType, setUserType] = useState('');

  const classes = styles();
  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Report</Typography>
          <ArrowRight />
          <Typography>Fees Consolidated Report</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.cardHeaderTitle}>
                  Fees Consolidated Report
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent>
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
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.saveBtn}
                >
                  Get Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} style={{ marginTop: 30 }}>
          <Card elevation={3}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.cardHeaderTitle}>
                  Course Wise Report
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent>
              <Grid
                container
                display="flex"
                justify="space-between"
                spacing={2}
                style={{
                  padding: 10,
                }}
              >
                <Grid xs={12} md={5}>
                  <Card style={{ marginBottom: 20 }}>
                    <CardHeader
                      title={
                        <Typography
                          variant="h6"
                          className={classes.cardHeaderTitle}
                        >
                          Course Wise Collected Fees
                        </Typography>
                      }
                      action={<InfoIcon />}
                      className={classes.cardHeader}
                    />
                    <CardContent>
                      <Pie
                        data={mockDashboard[0].data}
                        height={mockDashboard[0].height}
                        options={mockDashboard[0].options}
                      />
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Card style={{ marginBottom: 20 }}>
                    <CardHeader
                      title={
                        <Typography
                          variant="h6"
                          className={classes.cardHeaderTitle}
                        >
                          Paid/Unpaid Amount
                        </Typography>
                      }
                      action={<InfoIcon />}
                      className={classes.cardHeader}
                    />
                    <CardContent>
                      <Pie
                        data={mockDashboard[0].data}
                        height={mockDashboard[0].height}
                        options={mockDashboard[0].options}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <Card style={{ marginBottom: 20 }}>
                    <CardHeader
                      title={
                        <Typography
                          variant="h6"
                          className={classes.cardHeaderTitle}
                        >
                          Batch Wise Fees Collection
                        </Typography>
                      }
                      action={<InfoIcon />}
                      className={classes.cardHeader}
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
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default AssignCourse;
