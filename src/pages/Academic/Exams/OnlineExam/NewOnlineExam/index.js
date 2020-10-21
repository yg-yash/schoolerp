import AppBar from '@material-ui/core/AppBar';
import ArrowRight from '@material-ui/icons/ArrowRight';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { Wrapper } from '../../../../../components';
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';

const names = ['A', 'B', 'C'];

const InstitutionDetails = ({ width }) => {
  const classes = styles();

  const [startMonth, setStartMonth] = useState('');
  const [endYear, setEndYear] = useState('');
  const [name, setName] = useState('');
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
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Academic</Typography>
          <ArrowRight />
          <Typography>Exams</Typography>
          <ArrowRight />
          <Typography>New Online Exam</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Card elevation={3}>
            <CardHeader
              className={classes.cardHeader}
              title={
                <Typography variant="h6" className={classes.cardTitle}>
                  Create Online Exam
                </Typography>
              }
            ></CardHeader>
            <CardContent>
              <Card className={classes.card} elevation={3}>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  spacing={2}
                >
                  <Grid item xs={12} md={5} className={classes.column}>
                    <div className={classes.inputContainer}>
                      <Typography variant="body2">
                        Online Exam Name
                        <span className={classes.required}>*</span>
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
                    <div className={classes.inputContainer}>
                      <Typography variant="body2">
                        Online Exam Time(Minutes)
                        <span className={classes.required}>*</span>
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
                    <div className={classes.inputContainer}>
                      <Typography variant="body2">
                        Course <span className={classes.required}>*</span>
                      </Typography>
                      <FormControl
                        variant="filled"
                        className={classes.textField}
                      >
                        <Select
                          value={startMonth}
                          variant="outlined"
                          onChange={(e) => setStartMonth(e.target.value)}
                          className={classes.select}
                        >
                          <MenuItem value="india">STD I</MenuItem>
                          <MenuItem value="australia">STD II</MenuItem>
                          <MenuItem value="usa">STD III</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className={classes.inputContainer}>
                      <Typography variant="body2">
                        Online Exam Format{' '}
                        <span className={classes.required}>*</span>
                      </Typography>
                      <FormControl
                        variant="filled"
                        className={classes.textField}
                      >
                        <Select
                          value={endYear}
                          variant="outlined"
                          onChange={(e) => setEndYear(e.target.value)}
                          className={classes.select}
                        >
                          <MenuItem value="india">Objective</MenuItem>
                          <MenuItem value="australia">MCQ</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className={`${classes.inputContainer}`}>
                      <Typography variant="body2">
                        Start Date
                        <span className={classes.required}>*</span>
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
                    <div className={`${classes.inputContainer}`}>
                      <Typography variant="body2">
                        End Date
                        <span className={classes.required}>*</span>
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
                  </Grid>
                  <Grid item xs={12} md={6} className={classes.column}>
                    <div className={classes.inputContainer}>
                      <Typography variant="body2">
                        Pass Mark(Percentage)
                        <span className={classes.required}>*</span>
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
                    <div className={classes.inputContainer}>
                      <Typography variant="body2">
                        Batch <span className={classes.required}>*</span>
                      </Typography>
                      <FormControl className={classes.textField}>
                        <Select
                          multiple
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
                        Online Exam Type{' '}
                        <span className={classes.required}>*</span>
                      </Typography>
                      <FormControl
                        variant="filled"
                        className={classes.textField}
                      >
                        <Select
                          value={endYear}
                          variant="outlined"
                          onChange={(e) => setEndYear(e.target.value)}
                          className={classes.select}
                        >
                          <MenuItem value="india">General</MenuItem>
                          <MenuItem value="australia">Not</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </Grid>
                </Grid>
              </Card>

              <Button
                variant="contained"
                color="primary"
                className={classes.savebtn}
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
            </CardContent>
          </Card>
        </MuiPickersUtilsProvider>
      </div>
    </Wrapper>
  );
};

export default InstitutionDetails;
