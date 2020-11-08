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
import CheckBox from '@material-ui/core/Checkbox';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import InfoIcon from '@material-ui/icons/Info';
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
            <Typography>Academics</Typography>
            <ArrowRight />
            <Typography>Certificate</Typography>
            <ArrowRight />
            <Typography>Custom Certificate</Typography>
          </Toolbar>
        </AppBar>
        <Grid container className={classes.container}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.cardHeaderTitle}>
                  Custom Template
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Certificate Type <span className={classes.required}>*</span>
                </Typography>
                <FormControl variant="filled" className={classes.textField}>
                  <Select
                    value={userType}
                    variant="outlined"
                    onChange={(e) => setUserType(e.target.value)}
                    className={classes.select}
                  >
                    <MenuItem value="india">STD I</MenuItem>
                    <MenuItem value="australia">STD II</MenuItem>
                    <MenuItem value="usa">STD III</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Certificate Sub Type{' '}
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
              <div className={classes.section}>
                <Typography variant="body1">Header</Typography>
              </div>

              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Logo <span className={classes.required}>*</span>
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
              <div className={classes.inputContainer}>
                <div className={classes.btnRow}>
                  <Typography variant="body2">
                    Mark tick if institution name is default
                  </Typography>
                  <CheckBox />
                </div>
              </div>

              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Institution Name <span className={classes.required}>*</span>
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
                <div className={classes.btnRow}>
                  <Typography variant="body2">
                    Mark tick if institution name is default
                  </Typography>
                  <CheckBox />
                </div>
              </div>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Institution Address{' '}
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
              <div className={classes.section}>
                <Typography variant="body1">Content</Typography>
              </div>

              <div className={classes.inputContainer}>
                <div className={classes.btnRow}>
                  <Typography variant="body2">
                    Student/Employee Photo
                  </Typography>
                  <CheckBox />
                </div>
              </div>
              <div className={classes.inputContainer}>
                <div className={classes.btnRow}>
                  <Typography variant="body2">
                    Certificate Issue Date
                  </Typography>
                  <CheckBox />
                </div>
              </div>

              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Certificate Heading{' '}
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
                  Certificate Content{' '}
                  <span className={classes.required}>*</span>
                </Typography>
                <div className={classes.orangeItem}>
                  <div className={classes.row}>
                    <InfoIcon className={classes.infoicon} />
                    <Typography>
                      Download the excel file format from below link and copy
                      the below values in corresponding columns while filling
                      excel sheet.
                    </Typography>
                  </div>
                  <p className={classes.studentBtn}>Employee excel format</p>
                </div>

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
              <div className={classes.section}>
                <Typography variant="body1">Footer</Typography>
              </div>
              <div className={classes.inputContainer}>
                <div className={classes.btnRow}>
                  <Typography variant="body2">
                    Principal Signature Space
                  </Typography>
                  <CheckBox />
                </div>
              </div>

              <div className={classes.inputContainer}>
                <div className={classes.btnRow}>
                  <Typography variant="body2">
                    Head Master/HOD Signature Space
                  </Typography>
                  <CheckBox />
                </div>
              </div>
              <div className={classes.inputContainer}>
                <div className={classes.btnRow}>
                  <Typography variant="body2">
                    Teacher Signature Space
                  </Typography>
                  <CheckBox />
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
      </Wrapper>
    </MuiPickersUtilsProvider>
  );
};

export default AssignCourse;
