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

const EnterMark = () => {
  const classes = styles();
  const [startYear, setStartYear] = useState('');
  const [startMonth, setStartMonth] = useState('');
  const [endYear, setEndYear] = useState('');
  const [endMonth, setEndMonth] = useState('');

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.column}>
        <Card elevation={3} className={classes.card}>
          <CardHeader
            className={classes.cardHeader}
            title={
              <Typography
                variant="h6"
                color="textPrimary"
                style={{ width: '100%', color: 'white' }}
              >
                Enter Marks
              </Typography>
            }
          />
          <CardContent className={classes.row}>
            <div className={classes.inputContainer}>
              <Typography variant="body2">
                Term <span className={classes.required}>*</span>
              </Typography>
              <FormControl variant="filled" className={classes.textField}>
                <Select
                  value={startYear}
                  variant="outlined"
                  onChange={(e) => setStartYear(e.target.value)}
                  className={classes.select}
                >
                  <MenuItem value="india">1998</MenuItem>
                  <MenuItem value="australia">1999</MenuItem>
                  <MenuItem value="usa">2000</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.inputContainer}>
              <Typography variant="body2">
                Skills <span className={classes.required}>*</span>
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
            <div className={classes.inputContainer}>
              <Typography variant="body2">
                Course <span className={classes.required}>*</span>
              </Typography>
              <FormControl variant="filled" className={classes.textField}>
                <Select
                  value={endYear}
                  variant="outlined"
                  onChange={(e) => setEndYear(e.target.value)}
                  className={classes.select}
                >
                  <MenuItem value="india">1998</MenuItem>
                  <MenuItem value="australia">1999</MenuItem>
                  <MenuItem value="usa">2000</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.inputContainer}>
              <Typography variant="body2">
                Batch <span className={classes.required}>*</span>
              </Typography>
              <FormControl variant="filled" className={classes.textField}>
                <Select
                  value={endMonth}
                  variant="outlined"
                  onChange={(e) => setEndMonth(e.target.value)}
                  className={classes.select}
                >
                  <MenuItem value="india">January</MenuItem>
                  <MenuItem value="australia">February</MenuItem>
                  <MenuItem value="usa">March</MenuItem>
                </Select>
              </FormControl>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EnterMark;
