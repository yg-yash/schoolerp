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
import InfoIcon from '@material-ui/icons/Info';
import { Wrapper } from '../../../components';
import Paper from '@material-ui/core/Paper';
import styles from './styles';
import AddIcon from '@material-ui/icons/Add';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SaveIcon from '@material-ui/icons/Save';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const departments = [
  'Maths Department',
  'English Department',
  'Science Department',
];

const batch = ['STD I', 'STD II', 'STD III', 'STD IV', 'STD V', 'STD VI'];

const subjects = [
  'CH564- Chemistry',
  'D8465- Drawing',
  'EN31001-English',
  'GK100-GK',
  'GK145-Gk',
];

const EmployeeImport = ({ width }) => {
  const classes = styles();
  const [userType, setUserType] = useState('');
  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Settings</Typography>
          <ArrowRight />
          <Typography>Academic</Typography>
          <ArrowRight />
          <Typography>Time table</Typography>
          <ArrowRight />
          <Typography>Time Table Import</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.cardHeaderTitle}>
                  Timetable Import
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent>
              <div className={classes.row}>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Year <span className={classes.required}>*</span>
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
                    Month <span className={classes.required}>*</span>
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
                <Typography variant="body2">
                  Browse File <span className={classes.required}>*</span>
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

                  <Typography variant="body2">No File Choosen</Typography>
                </div>
              </div>
              <Button
                variant="contained"
                className={classes.submitBtn}
                color="primary"
                startIcon={<SaveIcon />}
              >
                Submit
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} className={classes.itemContainer}>
          <Card elevation={3} className={classes.itemCard}>
            <div className={classes.orangeItem}>
              <div className={classes.row}>
                <InfoIcon className={classes.infoicon} />
                <Typography>
                  Download the excel file format from below link and copy the
                  below values in corresponding columns while filling excel
                  sheet.
                </Typography>
              </div>
              <p className={classes.studentBtn}>Timetable format</p>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default EmployeeImport;
