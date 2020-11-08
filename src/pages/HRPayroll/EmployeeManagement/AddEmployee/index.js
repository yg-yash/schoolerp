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
import { Wrapper } from '../../../../components';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import styles from './styles';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';

function createData(no, title, course, batch, subject, dateOfSubmission) {
  return { no, title, course, batch, subject, dateOfSubmission };
}

const rows = [
  createData(
    1,
    'testdyhuug',
    'STD II',
    'A',
    'English-ENG1001',
    'e1001-Malavika S Pillai'
  ),
  createData(
    2,
    'Maths asssignment 4',
    'STD II',
    'A',
    'Maths-ENG1001',
    'e1001- Malavika S Pillai'
  ),
];

const AssignCourse = ({ width }) => {
  const [userType, setUserType] = useState('');
  const [checked, setChecked] = React.useState([0]);
  const [title, setTitle] = useState('');
  const [list, setList] = useState([
    'STD I',
    'STD II',
    'STD III',
    'STD IV',
    'STD V',
    'STD VI',
    'STD VII',
    'STD VIII',
    'STD IX',
    'STD X',
    'STD XI',
    'STD XII',
  ]);

  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2014-08-18T21:11:54')
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const classes = styles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Wrapper padding={false}>
        <AppBar position="static" color="primary">
          <Toolbar className={classes.toolBar}>
            <Typography>HR/Payroll</Typography>
            <ArrowRight />
            <Typography>Employee Management</Typography>
            <ArrowRight />
            <Typography>Add Employee</Typography>
          </Toolbar>
        </AppBar>
        <Grid container className={classes.container}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.cardHeaderTitle}>
                  Employee Registration
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent>
              <Grid item xs={12}>
                <Card elevation={3} className={classes.card}>
                  <CardHeader
                    title={
                      <Typography
                        variant="h6"
                        className={classes.cardHeaderTitle}
                      >
                        Employee Details
                      </Typography>
                    }
                    className={classes.cardHeader}
                  />
                  <CardContent>
                    <div className={classes.inputContainer}>
                      <Typography variant="body2">
                        Employee Code
                        <span className={classes.required}>*</span>
                      </Typography>
                      <TextField
                        variant="outlined"
                        InputProps={{
                          className: classes.textFieldInput,
                        }}
                        className={classes.textField}
                        value={title}
                        onChange={(e) => setTitle(e.target.vallue)}
                      />
                    </div>
                    <div className={`${classes.inputContainer}`}>
                      <Typography variant="body2">
                        Joining Date
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
                    <div className={classes.inputContainer}>
                      <Typography variant="body2">
                        Department <span className={classes.required}>*</span>
                      </Typography>
                      <FormControl
                        variant="filled"
                        className={classes.textField}
                      >
                        <Select
                          value={userType}
                          variant="outlined"
                          onChange={(e) => setUserType(e.target.value)}
                          className={classes.select}
                        >
                          <MenuItem value="india">English - ENG1001</MenuItem>
                          <MenuItem value="australia">GK - GK1001</MenuItem>
                          <MenuItem value="australia">
                            Chemistry - CH1001
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className={classes.inputContainer}>
                      <Typography variant="body2">
                        Designation <span className={classes.required}>*</span>
                      </Typography>
                      <FormControl
                        variant="filled"
                        className={classes.textField}
                      >
                        <Select
                          value={userType}
                          variant="outlined"
                          onChange={(e) => setUserType(e.target.value)}
                          className={classes.select}
                        >
                          <MenuItem value="india">English - ENG1001</MenuItem>
                          <MenuItem value="australia">GK - GK1001</MenuItem>
                          <MenuItem value="australia">
                            Chemistry - CH1001
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className={classes.inputContainer}>
                      <Typography variant="body2">
                        Qualification
                        <span className={classes.required}>*</span>
                      </Typography>
                      <TextField
                        variant="outlined"
                        InputProps={{
                          className: classes.textFieldInput,
                        }}
                        className={classes.textField}
                        value={title}
                        onChange={(e) => setTitle(e.target.vallue)}
                      />
                    </div>
                    <div className={classes.inputContainer}>
                      <Typography variant="body2">
                        Total Experience
                        <span className={classes.required}>*</span>
                      </Typography>
                      <TextField
                        variant="outlined"
                        InputProps={{
                          className: classes.textFieldInput,
                        }}
                        className={classes.textField}
                        value={title}
                        onChange={(e) => setTitle(e.target.vallue)}
                      />
                    </div>
                    <div className={classes.inputContainer}>
                      <Typography variant="body2">
                        User Type <span className={classes.required}>*</span>
                      </Typography>
                      <FormControl
                        variant="filled"
                        className={classes.textField}
                      >
                        <Select
                          value={userType}
                          variant="outlined"
                          onChange={(e) => setUserType(e.target.value)}
                          className={classes.select}
                        >
                          <MenuItem value="india">English - ENG1001</MenuItem>
                          <MenuItem value="australia">GK - GK1001</MenuItem>
                          <MenuItem value="australia">
                            Chemistry - CH1001
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
              <Grid
                container
                display="flex"
                justify="space-between"
                spacing={2}
                style={{ marginTop: 10 }}
              >
                <Grid item xs={12} md={6}>
                  <Card elevation={3} className={classes.card}>
                    <CardHeader
                      title={
                        <Typography
                          variant="h6"
                          className={classes.cardHeaderTitle}
                        >
                          Personal Details
                        </Typography>
                      }
                      className={classes.cardHeader}
                    />
                    <CardContent>
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          First Name
                          <span className={classes.required}>*</span>
                        </Typography>
                        <TextField
                          variant="outlined"
                          InputProps={{
                            className: classes.textFieldInput,
                          }}
                          className={classes.textField}
                          value={title}
                          onChange={(e) => setTitle(e.target.vallue)}
                        />
                      </div>
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          Middle Name
                          <span className={classes.required}>*</span>
                        </Typography>
                        <TextField
                          variant="outlined"
                          InputProps={{
                            className: classes.textFieldInput,
                          }}
                          className={classes.textField}
                          value={title}
                          onChange={(e) => setTitle(e.target.vallue)}
                        />
                      </div>
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          Last Name
                          <span className={classes.required}>*</span>
                        </Typography>
                        <TextField
                          variant="outlined"
                          InputProps={{
                            className: classes.textFieldInput,
                          }}
                          className={classes.textField}
                          value={title}
                          onChange={(e) => setTitle(e.target.vallue)}
                        />
                      </div>
                      <div className={`${classes.inputContainer}`}>
                        <Typography variant="body2">
                          Date of Birth
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
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          Gender <span className={classes.required}>*</span>
                        </Typography>
                        <FormControl
                          variant="filled"
                          className={classes.textField}
                        >
                          <Select
                            value={userType}
                            variant="outlined"
                            onChange={(e) => setUserType(e.target.value)}
                            className={classes.select}
                          >
                            <MenuItem value="india">English - ENG1001</MenuItem>
                            <MenuItem value="australia">GK - GK1001</MenuItem>
                            <MenuItem value="australia">
                              Chemistry - CH1001
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          PAN Card Number
                          <span className={classes.required}>*</span>
                        </Typography>
                        <TextField
                          variant="outlined"
                          InputProps={{
                            className: classes.textFieldInput,
                          }}
                          className={classes.textField}
                          value={title}
                          onChange={(e) => setTitle(e.target.vallue)}
                        />
                      </div>
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          Provided Fund Account No
                          <span className={classes.required}>*</span>
                        </Typography>
                        <TextField
                          variant="outlined"
                          InputProps={{
                            className: classes.textFieldInput,
                          }}
                          className={classes.textField}
                          value={title}
                          onChange={(e) => setTitle(e.target.vallue)}
                        />
                      </div>
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          Professional Tax Account No
                          <span className={classes.required}>*</span>
                        </Typography>
                        <TextField
                          variant="outlined"
                          InputProps={{
                            className: classes.textFieldInput,
                          }}
                          className={classes.textField}
                          value={title}
                          onChange={(e) => setTitle(e.target.vallue)}
                        />
                      </div>
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          ESIC Account No
                          <span className={classes.required}>*</span>
                        </Typography>
                        <TextField
                          variant="outlined"
                          InputProps={{
                            className: classes.textFieldInput,
                          }}
                          className={classes.textField}
                          value={title}
                          onChange={(e) => setTitle(e.target.vallue)}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card elevation={3} className={classes.card}>
                    <CardHeader
                      title={
                        <Typography
                          variant="h6"
                          className={classes.cardHeaderTitle}
                        >
                          Contact Details
                        </Typography>
                      }
                      className={classes.cardHeader}
                    />
                    <CardContent>
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          Present Address
                          <span className={classes.required}>*</span>
                        </Typography>
                        <TextField
                          variant="outlined"
                          InputProps={{
                            className: classes.textFieldInput,
                          }}
                          className={classes.textField}
                          value={title}
                          onChange={(e) => setTitle(e.target.vallue)}
                        />
                      </div>
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          Permanent Address
                          <span className={classes.required}>*</span>
                        </Typography>
                        <TextField
                          variant="outlined"
                          InputProps={{
                            className: classes.textFieldInput,
                          }}
                          className={classes.textField}
                          value={title}
                          onChange={(e) => setTitle(e.target.vallue)}
                        />
                      </div>
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          City
                          <span className={classes.required}>*</span>
                        </Typography>
                        <TextField
                          variant="outlined"
                          InputProps={{
                            className: classes.textFieldInput,
                          }}
                          className={classes.textField}
                          value={title}
                          onChange={(e) => setTitle(e.target.vallue)}
                        />
                      </div>
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          Pin
                          <span className={classes.required}>*</span>
                        </Typography>
                        <TextField
                          variant="outlined"
                          InputProps={{
                            className: classes.textFieldInput,
                          }}
                          className={classes.textField}
                          value={title}
                          onChange={(e) => setTitle(e.target.vallue)}
                        />
                      </div>
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          Country <span className={classes.required}>*</span>
                        </Typography>
                        <FormControl
                          variant="filled"
                          className={classes.textField}
                        >
                          <Select
                            value={userType}
                            variant="outlined"
                            onChange={(e) => setUserType(e.target.value)}
                            className={classes.select}
                          >
                            <MenuItem value="india">English - ENG1001</MenuItem>
                            <MenuItem value="australia">GK - GK1001</MenuItem>
                            <MenuItem value="australia">
                              Chemistry - CH1001
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          State <span className={classes.required}>*</span>
                        </Typography>
                        <FormControl
                          variant="filled"
                          className={classes.textField}
                        >
                          <Select
                            value={userType}
                            variant="outlined"
                            onChange={(e) => setUserType(e.target.value)}
                            className={classes.select}
                          >
                            <MenuItem value="india">English - ENG1001</MenuItem>
                            <MenuItem value="australia">GK - GK1001</MenuItem>
                            <MenuItem value="australia">
                              Chemistry - CH1001
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          Phone
                          <span className={classes.required}>*</span>
                        </Typography>
                        <TextField
                          variant="outlined"
                          InputProps={{
                            className: classes.textFieldInput,
                          }}
                          className={classes.textField}
                          value={title}
                          onChange={(e) => setTitle(e.target.vallue)}
                        />
                      </div>
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          Mobile
                          <span className={classes.required}>*</span>
                        </Typography>
                        <TextField
                          variant="outlined"
                          InputProps={{
                            className: classes.textFieldInput,
                          }}
                          className={classes.textField}
                          value={title}
                          onChange={(e) => setTitle(e.target.vallue)}
                        />
                      </div>
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          Email <span className={classes.required}>*</span>
                        </Typography>
                        <FormControl
                          variant="filled"
                          className={classes.textField}
                        >
                          <Select
                            value={userType}
                            variant="outlined"
                            onChange={(e) => setUserType(e.target.value)}
                            className={classes.select}
                          >
                            <MenuItem value="india">English - ENG1001</MenuItem>
                            <MenuItem value="australia">GK - GK1001</MenuItem>
                            <MenuItem value="australia">
                              Chemistry - CH1001
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          Browse Files{' '}
                          <span className={classes.required}>*</span>
                        </Typography>
                        <div className={classes.btnRow}>
                          <input
                            accept="image/*"
                            className={classes.input}
                            id="fees-allocation-upload"
                            multiple
                            type="file"
                            hidden
                          />
                          <label htmlFor="fees-allocation-upload">
                            <Button
                              variant="contained"
                              color="secondary"
                              className={classes.uploadBtn}
                              component="span"
                              startIcon={<AttachFileIcon />}
                            >
                              Choose File
                            </Button>
                          </label>

                          <Typography variant="body2">
                            No File Choosen
                          </Typography>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Wrapper>
    </MuiPickersUtilsProvider>
  );
};

export default AssignCourse;
