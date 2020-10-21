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
import TextField from '@material-ui/core/TextField';
import AttachFile from '@material-ui/icons/AttachFile';
import SaveIcon from '@material-ui/icons/Save'
import { Wrapper } from '../../../components';
import styles from './styles';

const LoginPage = ({ width }) => {
  const [headerColor, setHeaderColor] = useState('');

  const classes = styles();
  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Settings</Typography>
          <ArrowRight />
          <Typography>Login Form Settings</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.headingText}>
                  Login Form Settings
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent>
              <div className={classes.outerDiv}>
                <Typography variant="h6">Background Image</Typography>
                <div className={classes.btnRow}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.uploadBtn}
                    startIcon={<AttachFile />}
                  >
                    Browse
                  </Button>
                  <Typography variant="body2">No File Selected</Typography>
                </div>
              </div>
              <div className={classes.outerDiv}>
                <Typography variant="h6">Header</Typography>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">Header Color</Typography>
                  <TextField
                    variant="outlined"
                    InputProps={{
                      className: classes.textFieldInput,
                    }}
                    className={classes.textField}
                    value={headerColor}
                    onChange={(e) => setHeaderColor(e.target.vallue)}
                  />
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">Logo</Typography>
                  <div className={classes.btnRow}>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.uploadBtn}
                      startIcon={<AttachFile />}
                    >
                      Browse...
                    </Button>
                    <Typography variant="body2">No File Selected</Typography>
                  </div>
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">Logo Width</Typography>
                  <TextField
                    variant="outlined"
                    InputProps={{
                      className: classes.textFieldInput,
                    }}
                    className={classes.textField}
                    value={headerColor}
                    onChange={(e) => setHeaderColor(e.target.vallue)}
                  />
                </div>
              </div>
              <div className={classes.outerDiv}>
                <Typography variant="h6">Login Form</Typography>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Login Form Transparency
                  </Typography>
                  <TextField
                    variant="outlined"
                    InputProps={{
                      className: classes.textFieldInput,
                    }}
                    className={classes.textField}
                    value={headerColor}
                    onChange={(e) => setHeaderColor(e.target.vallue)}
                  />
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">Logo Form Logo</Typography>
                  <div className={classes.btnRow}>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.uploadBtn}
                    startIcon={<AttachFile />}
                    >
                      Browse...
                    </Button>
                    <Typography variant="body2">No File Selected</Typography>
                  </div>
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">Logo Width</Typography>
                  <TextField
                    variant="outlined"
                    InputProps={{
                      className: classes.textFieldInput,
                    }}
                    className={classes.textField}
                    value={headerColor}
                    onChange={(e) => setHeaderColor(e.target.vallue)}
                  />
                </div>
              </div>
              <Button
                variant="contained"
                color="primary"
                className={classes.saveBtn}
                startIcon={<SaveIcon/>}
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

export default LoginPage;
