import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { Wrapper } from '../../../components';
import AppBar from '@material-ui/core/AppBar';
import ArrowRight from '@material-ui/icons/ArrowRight';
import Toolbar from '@material-ui/core/Toolbar';
import SaveIcon from '@material-ui/icons/Save';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';

const names = [
  'Chemistry',
  'Drawing -D3465',
  'English -ENG1001',
  'GK-GK100',
  'GK- GK145',
];
const AssignTask = () => {
  const classes = styles();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [userType, setUserType] = useState();
  const [phone, setPhone] = useState('');
  const [mobile, setMobile] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2014-08-18T21:11:54')
  );
  const [personName, setPersonName] = React.useState([]);
  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Wrapper padding={false}>
        <AppBar position="static" color="primary">
          <Toolbar className={classes.toolBar}>
            <Typography>Task Manager</Typography>
            <ArrowRight />
            <Typography>Assign Task</Typography>
          </Toolbar>
        </AppBar>
        <Grid container className={classes.container}>
          <Grid item xs={10} className={classes.column}>
            <Card elevation={3} className={classes.card}>
              <CardHeader
                title={
                  <Typography variant="h6" className={classes.headingText}>
                    Assign Task
                  </Typography>
                }
                className={classes.cardHeader}
              />
              <CardContent>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Task <span className={classes.required}>*</span>
                  </Typography>
                  <TextField
                    variant="outlined"
                    InputProps={{
                      className: classes.textFieldInput,
                    }}
                    className={classes.textField}
                    value={name}
                    onChange={(e) => setName(e.target.vallue)}
                  />
                </div>
                <div className={`${classes.inputContainer}`}>
                  <Typography variant="body2">
                    Description <span className={classes.required}>*</span>
                  </Typography>
                  <TextField
                    variant="outlined"
                    InputProps={{
                      className: classes.textFieldInput,
                    }}
                    multiline
                    rows={3}
                    className={classes.textField}
                    value={address}
                    onChange={(e) => setAddress(e.target.vallue)}
                  />
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Priority <span className={classes.required}>*</span>
                  </Typography>
                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={userType}
                      variant="outlined"
                      onChange={(e) => setUserType(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="india">High</MenuItem>
                      <MenuItem value="australia">Medium</MenuItem>
                      <MenuItem value="usa">Low</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Task Date
                    <span className={classes.required}>*</span>
                  </Typography>
                  <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    // label="Date picker inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    className={classes.textField}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    User Type<span className={classes.required}>*</span>
                  </Typography>
                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={userType}
                      variant="outlined"
                      onChange={(e) => setUserType(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="india">Employee</MenuItem>
                      <MenuItem value="australia">Teacher</MenuItem>
                      <MenuItem value="usa">Student</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Department <span className={classes.required}>*</span>
                  </Typography>
                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={userType}
                      variant="outlined"
                      onChange={(e) => setUserType(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="india">Maths</MenuItem>
                      <MenuItem value="australia">GK</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Subject <span className={classes.required}>*</span>
                  </Typography>
                  <FormControl className={classes.textField}>
                    <Select
                      multiple
                      variant="outlined"
                      native
                      value={personName}
                      onChange={handleChangeMultiple}
                      inputProps={{
                        id: 'select-multiple-native',
                      }}
                    >
                      {names.map((name) => (
                        <option
                          key={name}
                          value={name}
                          style={{ margin: 10, padding: 10 }}
                        >
                          {name}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Status <span className={classes.required}>*</span>
                  </Typography>
                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={userType}
                      variant="outlined"
                      onChange={(e) => setUserType(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="india">Open</MenuItem>
                      <MenuItem value="australia">Close</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </CardContent>
              <Button
                variant="contained"
                color="primary"
                className={classes.savebtn}
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Wrapper>
    </MuiPickersUtilsProvider>
  );
};

export default AssignTask;
