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
import { Wrapper } from '../../../components';
import styles from './styles';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

function createData(no, title, course, batch, subject, dateOfSubmission) {
  return { no, title, course, batch, subject, dateOfSubmission };
}

const rows = [
  createData(1, 'Transfer Certificates'),
  createData(2, 'Maths asssignment 4'),
];

const CertificateType = () => {
  const [title, setTitle] = useState('');
  const classes = styles();
  const [userType, setUserType] = useState('');

  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Message/SMS</Typography>
          <ArrowRight />
          <Typography>Bulk SMS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.cardHeaderTitle}>
                  Bulk SMS
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Bulk SMS <span className={classes.required}>*</span>
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
              <Typography variant="body1" style={{ textAlign: 'center' }}>
                OR <span className={classes.required}>*</span>
              </Typography>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  SMS For <span className={classes.required}>*</span>
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
                  Message <span className={classes.required}>*</span>
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
              <Button
                variant="contained"
                color="primary"
                className={classes.saveBtn}
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default CertificateType;
