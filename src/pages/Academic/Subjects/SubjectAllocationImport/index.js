import React from 'react';
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
import { Wrapper } from '../../../../components';
import Paper from '@material-ui/core/Paper';
import styles from './styles';
import AddIcon from '@material-ui/icons/Add';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SaveIcon from '@material-ui/icons/Save';

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
  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Settings</Typography>
          <ArrowRight />
          <Typography>Academic</Typography>
          <ArrowRight />
          <Typography>Subjects</Typography>
          <ArrowRight />
          <Typography>Subject Alllocation Import</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container}>
        <Grid item xs={12} md={3}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.cardHeaderTitle}>
                  Fees Alllocation Import
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent>
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
              <p className={classes.studentBtn}>
                Subject allocation excel format
              </p>
            </div>

            <div className={classes.itemRow}>
              <Card elevation={3} className={classes.smallCard}>
                <CardHeader
                  title={
                    <Typography
                      variant="h6"
                      className={classes.cardHeaderTitle}
                    >
                      Courses & Batch
                    </Typography>
                  }
                  className={classes.heading}
                />
                <CardContent>
                  {batch.map((item, index) => (
                    <Paper className={classes.paperRow} key={index}>
                      <AddIcon />
                      <Typography variant="body2" className={classes.itemName}>
                        {item}
                      </Typography>
                    </Paper>
                  ))}
                </CardContent>
              </Card>
              <Card elevation={3} className={classes.smallCard}>
                <CardHeader
                  title={
                    <Typography
                      variant="h6"
                      className={classes.cardHeaderTitle}
                    >
                      Department & Employee Code
                    </Typography>
                  }
                  className={classes.heading}
                />
                <CardContent>
                  {departments.map((item, index) => (
                    <Paper className={classes.paperRow} key={index}>
                      <AddIcon />
                      <Typography variant="body2" className={classes.itemName}>
                        {item}
                      </Typography>
                    </Paper>
                  ))}
                </CardContent>
              </Card>
              <Card elevation={3} className={classes.rightCard}>
                <CardHeader
                  title={
                    <Typography
                      variant="h6"
                      className={classes.cardHeaderTitle}
                    >
                      Subject
                    </Typography>
                  }
                  className={classes.heading}
                />
                <CardContent>
                  {subjects.map((item, index) => (
                    <Typography
                      variant="body2"
                      key={index}
                      className={classes.smallText}
                    >
                      {item}
                    </Typography>
                  ))}
                </CardContent>
              </Card>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default EmployeeImport;
