import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import styles from './styles';

const StudentPerformance = () => {
  const classes = styles();
  const [userType, setUserType] = useState('');

  return (
    <Grid container style={{ padding: 20 }}>
      <Grid item xs={12} style={{ marginBottom: 10 }}>
        <Card>
          <CardHeader
            title={
              <Typography variant="h6" className={classes.cardHeaderTitle}>
                Student Performance
              </Typography>
            }
            className={classes.cardHeader}
          />
          <CardContent>
            <div className={classes.row}>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Hostel Name <span className={classes.required}>*</span>
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
                  Hostel Room
                  <span className={classes.required}>*</span>
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
            </div>
          </CardContent>
        </Card>
      </Grid>
      {/* <Grid item xs={12}>
        <Card>
          <CardHeader
            subheader={mockDashboard[0].title}
            title={
              <Typography variant="h6" className={classes.cardHeaderTitle}>
                Student Performance
              </Typography>
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
      </Grid> */}
    </Grid>
  );
};

export default StudentPerformance;
