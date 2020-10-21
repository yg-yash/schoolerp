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
import { Wrapper } from '../../../components';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SaveIcon from '@material-ui/icons/Save';
import styles from './styles';

const StudentImport = ({ width }) => {
  const classes = styles();
  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Settings</Typography>
          <ArrowRight />
          <Typography>Student Import</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container}>
        <Grid item xs={12} md={3}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.cardHeaderTitle}>
                  Student Import
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
              <p className={classes.studentBtn}>Student excel format</p>
            </div>

            <div className={classes.itemRow}>
              <Card elevation={3} className={classes.smallCard}>
                <CardHeader
                  title={
                    <Typography variant="body2" className={classes.headingText}>
                      Blood Groups
                    </Typography>
                  }
                  className={classes.heading}
                />
                <CardContent>
                  <Typography className={classes.item}>A+</Typography>
                  <Typography className={classes.item}>A-</Typography>
                  <Typography className={classes.item}>B+</Typography>
                  <Typography className={classes.item}>A-</Typography>
                  <Typography className={classes.item}>A+</Typography>
                </CardContent>
              </Card>
              <Card elevation={3} className={classes.smallCard}>
                <CardHeader
                  title={
                    <Typography variant="body2" className={classes.headingText}>
                      Category
                    </Typography>
                  }
                  className={classes.heading}
                />
                <CardContent>
                  <Typography className={classes.item}>General</Typography>
                  <Typography className={classes.item}>OBC</Typography>
                  <Typography className={classes.item}>SCST</Typography>
                </CardContent>
              </Card>
              <Card elevation={3} className={classes.rightCard}>
                <CardHeader
                  title={
                    <Typography variant="body2" className={classes.headingText}>
                      Course & Batch
                    </Typography>
                  }
                  className={classes.heading}
                />
                <CardContent>
                  <Typography className={classes.item}>STD I_gpa</Typography>
                  <Typography className={classes.item}>STD I_cca</Typography>
                  <Typography className={classes.item}>STD II_gpa</Typography>
                  <Typography className={classes.item}>STD II_cca</Typography>
                </CardContent>
              </Card>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default StudentImport;
