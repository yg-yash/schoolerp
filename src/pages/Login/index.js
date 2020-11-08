import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LockIcon from '@material-ui/icons/Lock';
import styles from './styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from '../../actions/auth';

const Login = () => {
  const classes = styles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setpasswordError] = useState('');
  const [value, setValue] = useState('admin');
  const history = useHistory();

  const dispatch = useDispatch();
  const { isLoginLoading } = useSelector((state) => state.loadingReducer);
  const { error } = useSelector((state) => state.loginReducer);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const validateEmail = () => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email) {
      setEmailError('Email Is Required');
      return false;
    }
    if (!regex.test(email)) {
      setEmailError('Email Is Invalid');
      return false;
    }
    setEmailError('');
    return true;
  };
  const validatePassword = () => {
    if (!password) {
      setpasswordError('Password Is Required');
      return false;
    }
    setpasswordError('');
    return true;
  };

  const onSubmit = () => {
    // if (!email || !password) {
    //   return;
    // }
    dispatch(loginActions.requestLogin(email, password, value, history));
  };
  return (
    <Grid container className={classes.container}>
      <Card elevation={3} className={classes.card}>
        <CardContent>
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={onSubmit}
          >
            <div className={classes.inputContainer}>
              <Typography variant="body1" className={classes.label}>
                Email <span className={classes.required}>*</span>
              </Typography>
              <TextField
                variant="outlined"
                InputProps={{
                  className: classes.textFieldInput,
                  onChange: (e) => setEmail(e.target.value),
                  value: email,
                  required: true,
                  type: 'email',
                }}
                error={emailError ? true : false}
                helperText={emailError && emailError}
                className={classes.textField}
                onBlur={validateEmail}
              />
            </div>

            <div className={classes.inputContainer}>
              <Typography variant="body1" className={classes.label}>
                Password <span className={classes.required}>*</span>
              </Typography>
              <TextField
                variant="outlined"
                InputProps={{
                  className: classes.textFieldInput,
                  onChange: (e) => setPassword(e.target.value),
                  value: password,
                  required: true,
                  type: 'password',
                }}
                className={classes.textField}
                error={validatePassword ? true : false}
                helperText={validatePassword && validatePassword}
                onBlur={validatePassword}
              />
            </div>

            <div style={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={isLoginLoading ? null : <LockIcon />}
                className={classes.loginBtn}
                onClick={onSubmit}
                // disabled={!email || !password}
              >
                {isLoginLoading ? (
                  <CircularProgress color="secondary" size={25} />
                ) : (
                  'Login'
                )}
              </Button>
            </div>
          </form>
        </CardContent>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '0 15px 0 15px',
          }}
        >
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
              className={classes.row}
            >
              <FormControlLabel
                value="admin"
                control={<Radio color="primary" />}
                label={<Typography variant="body1">Admin</Typography>}
              />
              <FormControlLabel
                value="teacher"
                control={<Radio color="primary" />}
                label={<Typography variant="body1">Teacher</Typography>}
              />
              <FormControlLabel
                value="student"
                control={<Radio color="primary" />}
                label={<Typography variant="body1">Student</Typography>}
              />
              <FormControlLabel
                value="guardian"
                control={<Radio color="primary" />}
                label={<Typography variant="body1">Guardian</Typography>}
              />
              <FormControlLabel
                value="superadmin"
                control={<Radio color="primary" />}
                label={<Typography variant="body1">Super Admin</Typography>}
              />
            </RadioGroup>
          </FormControl>
        </div>
      </Card>
    </Grid>
  );
};

export default Login;
