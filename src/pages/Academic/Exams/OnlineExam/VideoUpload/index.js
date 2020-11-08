import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import { Wrapper } from '../../../../../components';
import AppBar from '@material-ui/core/AppBar';
import ArrowRight from '@material-ui/icons/ArrowRight';
import Toolbar from '@material-ui/core/Toolbar';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const VideoUpload = () => {
  const classes = styles();

  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Academic</Typography>
          <ArrowRight />
          <Typography>Online Exam</Typography>
          <ArrowRight />
          <Typography>Video Upload</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container}>
        <Grid item xs={10} className={classes.column}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.headingText}>
                  Video Upload
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Attachment <span className={classes.required}>*</span>
                </Typography>
                <div className={classes.btnRow}>
                  <input
                    accept="video/*"
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
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              className={classes.savebtn}
              startIcon={<CloudUploadIcon />}
            >
              Upload
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default VideoUpload;
