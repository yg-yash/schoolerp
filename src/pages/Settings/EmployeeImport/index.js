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
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SaveIcon from '@material-ui/icons/Save';
import { Wrapper } from '../../../components';
import styles from './styles';

const EmployeeImport = ({ width }) => {
  const classes = styles();
  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Settings</Typography>
          <ArrowRight />
          <Typography>Employee Import</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container}>
        <Grid item xs={12} md={3}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.cardHeaderTitle}>
                  Employee Import
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent>
              <Typography>Browse File *</Typography>
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
              <p className={classes.studentBtn}>Employee excel format</p>
            </div>

            <div className={classes.itemRow}>
              <Card elevation={3} className={classes.smallCard}>
                <CardHeader
                  title={
                    <Typography
                      variant="h6"
                      className={classes.cardHeaderTitle}
                    >
                      Department
                    </Typography>
                  }
                  className={classes.heading}
                />
                <CardContent>
                  <Typography className={classes.item}>
                    Maths Department
                  </Typography>
                  <Typography className={classes.item}>
                    English Department
                  </Typography>
                  <Typography className={classes.item}>
                    Science Department
                  </Typography>
                  <Typography className={classes.item}>
                    General Department
                  </Typography>
                  <Typography className={classes.item}>
                    Test Department
                  </Typography>
                </CardContent>
              </Card>
              <Card elevation={3} className={classes.smallCard}>
                <CardHeader
                  title={
                    <Typography
                      variant="h6"
                      className={classes.cardHeaderTitle}
                    >
                      Designation
                    </Typography>
                  }
                  className={classes.heading}
                />
                <CardContent>
                  <Typography className={classes.item}>Professors</Typography>
                  <Typography className={classes.item}>Teacher</Typography>
                  <Typography className={classes.item}>Clerk</Typography>
                  <Typography className={classes.item}>Test</Typography>
                </CardContent>
              </Card>
              <Card elevation={3} className={classes.smallCard}>
                <CardHeader
                  title={
                    <Typography
                      variant="h6"
                      className={classes.cardHeaderTitle}
                    >
                      User Type
                    </Typography>
                  }
                  className={classes.heading}
                />
                <CardContent>
                  <Typography className={classes.item}>Student</Typography>
                  <Typography className={classes.item}>Employee</Typography>
                  <Typography className={classes.item}>Guardian</Typography>
                  <Typography className={classes.item}>Admin</Typography>
                  <Typography className={classes.item}>Librarian</Typography>
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
