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
import CircularProgress from '@material-ui/core/CircularProgress';
import SaveIcon from '@material-ui/icons/Save';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../../actions/employee';

const AddEmployee = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [dob, setDob] = useState(new Date());
  const [gender, setGender] = useState('male');
  const [joiningDate, setJoiningDate] = useState(new Date());
  const [qualification, setQualification] = useState('');
  const [experience, setExperience] = useState('');
  const [presentAddress, setPresentAddress] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');
  const [phone, setPhone] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [pfNumber, setPfNumber] = useState('');
  const [esi, setEsi] = useState('');
  const [department, setDepartment] = useState('');
  const [bankName, setBankName] = useState('');
  const [branch, setBranch] = useState('');
  const [bankAddress, setBankAddress] = useState('');
  const [bankPhone, setBankPhone] = useState('');
  const [ifsc, setIfsc] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ddPayableAddress, setddPayableAddress] = useState('');
  const [code, setCode] = useState('');
  const [file, setFile] = useState(null);

  const { isEmployeeAdding } = useSelector((state) => state.loadingReducer);
  // const { error } = useSelector((state) => state.employeeReducer);

  const classes = styles();
  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const dispatch = useDispatch();

  const onSubmit = () => {
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('middleName', middleName);
    formData.append('lastName', lastName);
    formData.append('dob', dob);
    formData.append('gender', gender);
    formData.append('joiningDate', joiningDate);
    formData.append('qualification', qualification);
    formData.append('experience', experience);
    formData.append('presentAddress', presentAddress);
    formData.append('permanentAddress', permanentAddress);
    formData.append('city', city);
    formData.append('state', state);
    formData.append("department", department);
    formData.append('country', country);
    formData.append('pincode', Number(pincode));
    formData.append('phone', Number(phone));
    formData.append('mobile', Number(mobile));
    formData.append('email', email);
    formData.append('password', password);
    formData.append('addharNumber', Number(aadharNumber));
    formData.append('panNumber', Number(panNumber));
    formData.append('pfNumber', Number(pfNumber));
    formData.append('esi', esi);
    formData.append('bankName', bankName);
    formData.append('branch', branch);
    formData.append('bankAddress', bankAddress);
    formData.append('bankPhone', bankPhone);
    formData.append('ifsc', ifsc);
    formData.append('accountNumber', Number(accountNumber));
    formData.append('ddPayableAddress', ddPayableAddress);
    formData.append('code', Number(code));
    formData.append('file', file);
    dispatch(actions.addRequest(formData));
  };

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
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
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
                        value={joiningDate}
                        onChange={(e) => setJoiningDate(e)}
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
                      <TextField
                        variant="outlined"
                        InputProps={{
                          className: classes.textFieldInput,
                        }}
                        className={classes.textField}
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                      />
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
                        value={qualification}
                        onChange={(e) => setQualification(e.target.value)}
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
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                      />
                    </div>
                    {/* <div className={classes.inputContainer}>
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
                    </div> */}
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
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
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
                          value={middleName}
                          onChange={(e) => setMiddleName(e.target.value)}
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
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
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
                          value={dob}
                          onChange={(e) => setDob(dob)}
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
                            value={gender}
                            variant="outlined"
                            onChange={(e) => setGender(e.target.value)}
                            className={classes.select}
                          >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          Aadhar Card Number
                          <span className={classes.required}>*</span>
                        </Typography>
                        <TextField
                          variant="outlined"
                          InputProps={{
                            className: classes.textFieldInput,
                          }}
                          className={classes.textField}
                          value={aadharNumber}
                          onChange={(e) => setAadharNumber(e.target.value)}
                        />
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
                          value={panNumber}
                          onChange={(e) => setPanNumber(e.target.value)}
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
                          value={pfNumber}
                          onChange={(e) => setPfNumber(e.target.value)}
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
                          value={esi}
                          onChange={(e) => setEsi(e.target.value)}
                        />
                      </div>
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          Bank Name
                          <span className={classes.required}>*</span>
                        </Typography>
                        <TextField
                          variant="outlined"
                          InputProps={{
                            className: classes.textFieldInput,
                          }}
                          className={classes.textField}
                          value={bankName}
                          onChange={(e) => setBankName(e.target.value)}
                        />
                      </div>
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          Bank Address
                          <span className={classes.required}>*</span>
                        </Typography>
                        <TextField
                          variant="outlined"
                          InputProps={{
                            className: classes.textFieldInput,
                          }}
                          className={classes.textField}
                          value={bankAddress}
                          onChange={(e) => setBankAddress(e.target.value)}
                        />
                      </div>
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          Branch
                          <span className={classes.required}>*</span>
                        </Typography>
                        <TextField
                          variant="outlined"
                          InputProps={{
                            className: classes.textFieldInput,
                          }}
                          className={classes.textField}
                          value={branch}
                          onChange={(e) => setBranch(e.target.value)}
                        />
                      </div>
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          Bank Phone
                          <span className={classes.required}>*</span>
                        </Typography>
                        <TextField
                          variant="outlined"
                          InputProps={{
                            className: classes.textFieldInput,
                          }}
                          className={classes.textField}
                          value={bankPhone}
                          onChange={(e) => setBankPhone(e.target.value)}
                        />
                      </div>
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          IFSC
                          <span className={classes.required}>*</span>
                        </Typography>
                        <TextField
                          variant="outlined"
                          InputProps={{
                            className: classes.textFieldInput,
                          }}
                          className={classes.textField}
                          value={ifsc}
                          onChange={(e) => setIfsc(e.target.value)}
                        />
                      </div>
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          Account Number
                          <span className={classes.required}>*</span>
                        </Typography>
                        <TextField
                          variant="outlined"
                          InputProps={{
                            className: classes.textFieldInput,
                          }}
                          className={classes.textField}
                          value={accountNumber}
                          onChange={(e) => setAccountNumber(e.target.value)}
                        />
                      </div>
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          DD Payable Address
                          <span className={classes.required}>*</span>
                        </Typography>
                        <TextField
                          variant="outlined"
                          InputProps={{
                            className: classes.textFieldInput,
                          }}
                          className={classes.textField}
                          value={ddPayableAddress}
                          onChange={(e) => setddPayableAddress(e.target.value)}
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
                          value={presentAddress}
                          onChange={(e) => setPresentAddress(e.target.value)}
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
                          value={permanentAddress}
                          onChange={(e) => setPermanentAddress(e.target.value)}
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
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          Pincode
                          <span className={classes.required}>*</span>
                        </Typography>
                        <TextField
                          variant="outlined"
                          InputProps={{
                            className: classes.textFieldInput,
                          }}
                          className={classes.textField}
                          value={pincode}
                          onChange={(e) => setPincode(e.target.value)}
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
                            value={country}
                            variant="outlined"
                            onChange={(e) => setCountry(e.target.value)}
                            className={classes.select}
                          >
                            <MenuItem value="india">India</MenuItem>
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
                            value={state}
                            variant="outlined"
                            onChange={(e) => setState(e.target.value)}
                            className={classes.select}
                          >
                            <MenuItem value="delhi">Delhi</MenuItem>
                            <MenuItem value="maharashtra">Mahrashtra</MenuItem>
                            <MenuItem value="gujrat">Gujarat</MenuItem>
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
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
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
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                        />
                      </div>
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          Email <span className={classes.required}>*</span>
                        </Typography>
                        <TextField
                          variant="outlined"
                          InputProps={{
                            className: classes.textFieldInput,
                          }}
                          className={classes.textField}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className={classes.inputContainer}>
                        <Typography variant="body2">
                          Password <span className={classes.required}>*</span>
                        </Typography>
                        <TextField
                          variant="outlined"
                          InputProps={{
                            className: classes.textFieldInput,
                          }}
                          className={classes.textField}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
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
                            type="file"
                            hidden
                            onChange={onFileChange}
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
                            {file ? file.name : 'No File Choosen'}
                          </Typography>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              className={classes.saveBtn}
              startIcon={!isEmployeeAdding && <SaveIcon />}
              onClick={onSubmit}
            >
              {isEmployeeAdding ? (
                <CircularProgress color="secondary" />
              ) : (
                'Save'
              )}
            </Button>
          </Card>
        </Grid>
      </Wrapper>
    </MuiPickersUtilsProvider>
  );
};

export default AddEmployee;
