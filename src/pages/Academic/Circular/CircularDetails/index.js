import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
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
  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2014-08-18T21:11:54')
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Card elevation={3}>
        <CardHeader
          className={classes.cardHeader}
          title={
            <Typography variant="h6" className={classes.cardTitle}>
              Circular Details
            </Typography>
          }
        ></CardHeader>
        <CardContent>
          <Grid item xs={12} className={classes.column}>
            <Card className={classes.card} elevation={3}>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Circular Subject <span className={classes.required}>*</span>
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
                  Reference No. <span className={classes.required}>*</span>
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
                  Circular Content <span className={classes.required}>*</span>
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
                  Circular Date <span className={classes.required}>*</span>
                </Typography>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  value={selectedDate}
                  onChange={handleDateChange}
                  className={classes.textField}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </div>
            </Card>
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
