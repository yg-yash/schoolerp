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
import { Wrapper } from '../../../../components';
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

const CertificateType = ({ width }) => {
  const [checked, setChecked] = useState([0]);
  const [title, setTitle] = useState('');
  const [selectedDate, setSelectedDate] = useState(
    new Date('2014-08-18T21:11:54')
  );
  const classes = styles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Wrapper padding={false}>
        <AppBar position="static" color="primary">
          <Toolbar className={classes.toolBar}>
            <Typography>Academic</Typography>
            <ArrowRight />
            <Typography>Certificate</Typography>
            <ArrowRight />
            <Typography>Certificate Type</Typography>
          </Toolbar>
        </AppBar>
        <Grid
          container
          className={classes.container}
          justify="space-between"
          display="flex"
          spacing={2}
        >
          <Grid item xs={12} md={6}>
            <Card elevation={3} className={classes.card}>
              <CardHeader
                title={
                  <Typography variant="h6" className={classes.cardHeaderTitle}>
                    Certificate Type
                  </Typography>
                }
                className={classes.cardHeader}
              />
              <CardContent>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Certificate Type <span className={classes.required}>*</span>
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
          <Grid item xs={12} md={6}>
            <TableContainer component={Card}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tableHeader}>
                  <TableRow>
                    <TableCell>SI.No.</TableCell>
                    <TableCell>Certificate Type</TableCell>
                    <TableCell>Manage</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow
                      key={row.no}
                      className={
                        index % 2 === 0 ? classes.tableRow : classes.tableHeader
                      }
                    >
                      <TableCell component="th" scope="row">
                        {row.no}
                      </TableCell>
                      <TableCell>{row.title}</TableCell>
                      <TableCell>
                        <EditIcon color="primary" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Wrapper>
    </MuiPickersUtilsProvider>
  );
};

export default CertificateType;
