import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const AttendanceDaily = () => {
  const classes = styles();
  const [userType, setUserType] = useState('');

  return (
    <Grid>
      <Card elevation={3}>
        <CardHeader
          className={classes.cardHeader}
          title={
            <Typography variant="h6" className={classes.cardTitle}>
              Individual Student
            </Typography>
          }
        ></CardHeader>
        <CardContent>
          <Grid item xs={12} className={classes.column}>
            <Typography variant="body2">
              Search <span className={classes.required}>*</span>
            </Typography>
            <div className={classes.row}>
              <div className={classes.inputContainer}>
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
              <Button variant="contained" color="primary">
                Go
              </Button>
            </div>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default AttendanceDaily;
