import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import DateFnsUtils from '@date-io/date-fns';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
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
  const [selectedDate, setSelectedDate] = useState(
    new Date('2014-08-18T21:11:54')
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid
        container
        className={classes.container}
        justify="space-between"
        display="flex"
        spacing={2}
      >
        <Grid item xs={12}>
          <Card elevation={3}>
            <CardHeader
              className={classes.cardHeader}
              title={
                <Typography variant="h6" className={classes.cardTitle}>
                  Manage
                </Typography>
              }
            ></CardHeader>
            <CardContent>
              <Grid item xs={12} className={classes.column}>
                <div className={classes.row}>
                  <div className={classes.inputContainer}>
                    <Typography variant="body2">
                      User Type <span className={classes.required}>*</span>
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
                      Course <span className={classes.required}>*</span>
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
                      Batch <span className={classes.required}>*</span>
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
                      Student <span className={classes.required}>*</span>
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
                <div>
                  <div className={classes.inputContainer}>
                    <Typography variant="body2">
                      Student <span className={classes.required}>*</span>
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
                <Typography variant="h6">Change To</Typography>
                <div style={styles.row}>
                  <div className={classes.inputContainer}>
                    <Typography variant="body2">
                      Route <span className={classes.required}>*</span>
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
                      Destination <span className={classes.required}>*</span>
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
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default AcademicDetails;
