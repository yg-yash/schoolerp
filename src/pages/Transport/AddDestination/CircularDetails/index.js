import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';

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
  const [userType, setUserType] = useState('');

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Card elevation={3}>
        <CardHeader
          className={classes.cardHeader}
          title={
            <Typography variant="h6" className={classes.cardTitle}>
              Add Destination & Fees
            </Typography>
          }
        ></CardHeader>
        <CardContent>
          <Grid item xs={12} className={classes.column}>
            <div className={classes.inputContainer}>
              <Typography variant="body2">
                Route Code <span className={classes.required}>*</span>
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
                Pick up & Drop <span className={classes.required}>*</span>
              </Typography>
              <TextField
                variant="outlined"
                InputProps={{
                  className: classes.textFieldInput,
                }}
                className={classes.textField}
              />
            </div>
            <div className={classes.inputContainer}>
              <Typography variant="body2">
                Stop Time <span className={classes.required}>*</span>
              </Typography>
              <TextField
                variant="outlined"
                InputProps={{
                  className: classes.textFieldInput,
                }}
                className={classes.textField}
              />
            </div>
            <div className={classes.inputContainer}>
              <Typography variant="body2">
                Amount <span className={classes.required}>*</span>
              </Typography>
              <TextField
                variant="outlined"
                InputProps={{
                  className: classes.textFieldInput,
                }}
                className={classes.textField}
              />
            </div>
            <div className={classes.inputContainer}>
              <Typography variant="body2">
                Fee Type <span className={classes.required}>*</span>
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
          </Grid>
        </CardContent>
        <Button
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          className={classes.savebtn}
        >
          Save
        </Button>
      </Card>
    </MuiPickersUtilsProvider>
  );
};

export default AcademicDetails;
