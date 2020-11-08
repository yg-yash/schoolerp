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
import Paper from '@material-ui/core/Paper';
import styles from './styles';
import AddIcon from '@material-ui/icons/Add';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SaveIcon from '@material-ui/icons/Save';
import Checkbox from '@material-ui/core/Checkbox';

const fees = ['FORM 1', 'FORM 2', 'Business'];

const batch = ['STD I', 'STD II', 'STD III', 'STD IV', 'STD V', 'STD VI'];

const feesFor = ['All batches', 'Selected batch', 'Student in a batch'];

const EmployeeImport = ({ width }) => {
  const classes = styles();
  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Academic</Typography>
          <ArrowRight />
          <Typography>Assignments & Notes</Typography>
          <ArrowRight />
          <Typography>Assignments Import</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container}>
        <Grid item xs={12} md={5}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.cardHeaderTitle}>
                  Assignments Import
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent>
              <Typography variant="body2">
                Browse File <span className={classes.required}>*</span>
              </Typography>
              <div className={classes.btnRow}>
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
                <div className={classes.btnRow}>
                  <Checkbox color="primary" style={{ marginLeft: 30 }} />
                  <Typography>Send SMS Alert</Typography>
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
          <Card className={classes.itemCard}>
            <div className={classes.orangeItem}>
              <div className={classes.row}>
                <InfoIcon className={classes.infoicon} />
                <Typography>
                  Download the excel file format from below link and copy the
                  below values in corresponding columns while filling excel
                  sheet.
                </Typography>
              </div>
              <p className={classes.studentBtn}>Assignment Import</p>
            </div>

            <Grid item xs={4} className={classes.itemRow}>
              <Card elevation={3} className={classes.smallCard}>
                <CardHeader
                  title={
                    <Typography
                      variant="h6"
                      className={classes.cardHeaderTitle}
                    >
                      Course, Batch & Subject
                    </Typography>
                  }
                  className={classes.heading}
                />
                <CardContent>
                  {fees.map((item, index) => (
                    <Paper className={classes.paperRow} key={index}>
                      <AddIcon />
                      <Typography variant="body2" className={classes.itemName}>
                        {item}
                      </Typography>
                    </Paper>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default EmployeeImport;
