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
import { useHistory } from 'react-router-dom';

const Login = () => {
  const classes = styles();
  const [name, setName] = useState('');
  const [value, setValue] = useState('admin');
  const history = useHistory();

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const onSubmit = () => {
    localStorage.setItem('role', value);
    history.push('/', value);
  };
  return (
    <Grid container className={classes.container}>
      <Card elevation={3} className={classes.card}>
        <CardContent>
          <div className={classes.inputContainer}>
            <Typography variant="body1" className={classes.label}>
              Username <span className={classes.required}>*</span>
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
            <Typography variant="body1" className={classes.label}>
              Password <span className={classes.required}>*</span>
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

          <Button
            variant="contained"
            color="primary"
            startIcon={<LockIcon />}
            className={classes.loginBtn}
            onClick={onSubmit}
          >
            Login
          </Button>
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
