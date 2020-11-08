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

function createData(name, calories, fat, carbs, protein, status) {
  return { name, calories, fat, carbs, protein, status };
}

const rows = [
  createData(1, 2016, 'April', 2016, 'March', 'Active'),
  createData(2, 2016, 'April', 2017, 'Match', 'Active'),
  createData(3, 2017, '', 2018, 'March', 'Active'),
  createData(4, 2018, '', 2019, '', 'Active'),
];

const AcademicDetails = () => {
  const classes = styles();
  const [startYear, setStartYear] = useState('');
  const [startMonth, setStartMonth] = useState('');

  return (
    <Card elevation={3}>
      <CardHeader
        className={classes.cardHeader}
        title={
          <Typography variant="h6" className={classes.cardTitle}>
            Report
          </Typography>
        }
      ></CardHeader>
      <CardContent>
        <Grid container direction="row" justify="space-between" spacing={2}>
          <Grid item xs={12} className={classes.column}>
            <Card className={classes.card} elevation={3}>
              <div className={classes.row}>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Designation <span className={classes.required}>*</span>
                  </Typography>
                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={startYear}
                      variant="outlined"
                      onChange={(e) => setStartYear(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="india">test</MenuItem>
                      <MenuItem value="australia">1999</MenuItem>
                      <MenuItem value="usa">2000</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Employee Name <span className={classes.required}>*</span>
                  </Typography>
                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={startMonth}
                      variant="outlined"
                      onChange={(e) => setStartMonth(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="india">January</MenuItem>
                      <MenuItem value="australia">February</MenuItem>
                      <MenuItem value="usa">March</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AcademicDetails;
