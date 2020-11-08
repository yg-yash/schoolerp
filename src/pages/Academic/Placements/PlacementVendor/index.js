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
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import styles from './styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import EditIcon from '@material-ui/icons/Edit';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'date-fns';

function createData(no, title, course, batch, subject, dateOfSubmission) {
  return { no, title, course, batch, subject, dateOfSubmission };
}

const rows = [
  createData(
    1,
    'testdyhuug',
    'STD II',
    'A',
    'English-ENG1001',
    'e1001-Malavika S Pillai'
  ),
  createData(
    2,
    'Maths asssignment 4',
    'STD II',
    'A',
    'Maths-ENG1001',
    'e1001- Malavika S Pillai'
  ),
];

const AssignCourse = ({ width }) => {
  const [userType, setUserType] = useState('');
  const [checked, setChecked] = React.useState([0]);
  const [title, setTitle] = useState('');
  const [list, setList] = useState([
    'STD I',
    'STD II',
    'STD III',
    'STD IV',
    'STD V',
    'STD VI',
    'STD VII',
    'STD VIII',
    'STD IX',
    'STD X',
    'STD XI',
    'STD XII',
  ]);

  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2014-08-18T21:11:54')
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const classes = styles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Wrapper padding={false}>
        <AppBar position="static" color="primary">
          <Toolbar className={classes.toolBar}>
            <Typography>Academic</Typography>
            <ArrowRight />
            <Typography>Placement</Typography>
            <ArrowRight />
            <Typography>Placement Vendor</Typography>
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
                    Placement Vendors Details
                  </Typography>
                }
                className={classes.cardHeader}
              />
              <CardContent>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Company Name <span className={classes.required}>*</span>
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
                    Company Address <span className={classes.required}>*</span>
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
                    Vacancy <span className={classes.required}>*</span>
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
                    Programme Description{' '}
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
                    Placement Programme Date{' '}
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
                    <TableCell align="right">Title</TableCell>
                    <TableCell align="right">Course</TableCell>
                    <TableCell align="right">Batch</TableCell>
                    <TableCell align="right">Subject</TableCell>
                    <TableCell align="right">Date of Submission</TableCell>
                    <TableCell align="right">Manage</TableCell>
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
                      <TableCell align="right">{row.title}</TableCell>
                      <TableCell align="right">{row.course}</TableCell>
                      <TableCell align="right">{row.batch}</TableCell>
                      <TableCell align="right">{row.subject}</TableCell>
                      <TableCell align="right">
                        {row.dateOfSubmission}
                      </TableCell>
                      <TableCell align="right">
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

export default AssignCourse;
