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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'date-fns';

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

  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Academic</Typography>
          <ArrowRight />
          <Typography>Message/SMS</Typography>
          <ArrowRight />
          <Typography>Visitor SMS Settings</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.cardHeaderTitle}>
                  Visitor SMS Settings
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent>
              <div className={classes.row}>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Teachers <span className={classes.required}>*</span>
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
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Principal <span className={classes.required}>*</span>
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
              </div>
              <div className={classes.row}>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Director <span className={classes.required}>*</span>
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
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Fee Office <span className={classes.required}>*</span>
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
              </div>
              <div className={classes.row}>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Administration Office{' '}
                    <span className={classes.required}>*</span>
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
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Reception <span className={classes.required}>*</span>
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
              </div>
              <div className={classes.row}>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Students
                    <span className={classes.required}>*</span>
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
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Others <span className={classes.required}>*</span>
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
