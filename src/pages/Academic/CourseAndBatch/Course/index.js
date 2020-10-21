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
import { Wrapper } from '../../../../components';
import AppBar from '@material-ui/core/AppBar';
import ArrowRight from '@material-ui/icons/ArrowRight';
import Toolbar from '@material-ui/core/Toolbar';
import SaveIcon from '@material-ui/icons/Save';

const AddInstitutionDetails = () => {
  const classes = styles();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [userType, setUserType] = useState();
  const [phone, setPhone] = useState('');
  const [mobile, setMobile] = useState('');
  const [contactPerson, setContactPerson] = useState('');

  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Academic</Typography>
          <ArrowRight />
          <Typography>Course & Batch</Typography>
          <ArrowRight />
          <Typography>Course</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container}>
        <Grid item xs={10} className={classes.column}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.headingText}>
                  Add Course
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Course Name <span className={classes.required}>*</span>
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
                  Code <span className={classes.required}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  InputProps={{
                    className: classes.textFieldInput,
                  }}
                  className={classes.textField}
                  value={phone}
                  onChange={(e) => setPhone(e.target.vallue)}
                />
              </div>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Minimum Attendance Percentage{' '}
                  <span className={classes.required}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  InputProps={{
                    className: classes.textFieldInput,
                  }}
                  className={classes.textField}
                  value={mobile}
                  onChange={(e) => setMobile(e.target.vallue)}
                />
              </div>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Attendance Type <span className={classes.required}>*</span>
                </Typography>
                <FormControl variant="filled" className={classes.textField}>
                  <Select
                    value={userType}
                    variant="outlined"
                    onChange={(e) => setUserType(e.target.value)}
                    className={classes.select}
                  >
                    <MenuItem value="india">Daily</MenuItem>
                    <MenuItem value="australia">Weekly</MenuItem>
                    <MenuItem value="usa">Monthly</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Total Working Days <span className={classes.required}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  InputProps={{
                    className: classes.textFieldInput,
                  }}
                  className={classes.textField}
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.vallue)}
                />
              </div>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Syllabus Name <span className={classes.required}>*</span>
                </Typography>
                <FormControl variant="filled" className={classes.textField}>
                  <Select
                    value={userType}
                    variant="outlined"
                    onChange={(e) => setUserType(e.target.value)}
                    className={classes.select}
                  >
                    <MenuItem value="india">GPA</MenuItem>
                    <MenuItem value="australia">CCA</MenuItem>
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
  );
};

export default AddInstitutionDetails;