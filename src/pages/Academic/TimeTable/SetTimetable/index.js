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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CloseIcon from '@material-ui/icons/Close';
import styles from './styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import SaveIcon from '@material-ui/icons/Save';

function createData(day) {
  return { day };
}

function createPeriodData(course, startTime, endTime) {
  return { course, startTime, endTime };
}

const rows = [
  createData('Monday', 'STD I_gpa'),
  createData('Tuesday', 'No1'),
  createData('Wednesday', 'STD II_gpa'),
  createData('Friday', 'STD IV_gpa'),
];
const periodRows = [
  createData('Mathmetics', '09:00 AM', '10:00 AM'),
  createData('Science', '10:00 AM', '11:00 AM'),
  createData('BREAK', '11:00 AM', '11:15 AM'),
];

const AssignCourse = ({ width }) => {
  const [userType, setUserType] = useState('');
  const [showWeeklyDays, setShowWeeklyDays] = useState(false);
  const [showPeriodTiming, setShowPeriodTiming] = useState(false);

  const togglePeriodTiming = () => setShowPeriodTiming((value) => !value);
  const toggleWeeklyDays = () => setShowWeeklyDays((value) => !value);

  const classes = styles();
  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Academic</Typography>
          <ArrowRight />
          <Typography>Time Table</Typography>
          <ArrowRight />
          <Typography>Set Time Table</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container} spacing={2}>
        <Grid item xs={12}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.cardHeaderTitle}>
                  Select Course & Batch
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent className={classes.topCard}>
              <div className={classes.row}>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Course <span className={classes.required}>*</span>
                  </Typography>
                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={userType}
                      variant="outlined"
                      onChange={(e) => setUserType(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="india">STD I_cgpa</MenuItem>
                      <MenuItem value="australia">STD II_gpa</MenuItem>
                      <MenuItem value="usa">STD III_gpar</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Batch <span className={classes.required}>*</span>
                  </Typography>

                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={userType}
                      variant="outlined"
                      onChange={(e) => setUserType(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="india">A</MenuItem>
                      <MenuItem value="australia">B</MenuItem>
                      <MenuItem value="usa">C</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Batch <span className={classes.required}>*</span>
                  </Typography>

                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={userType}
                      variant="outlined"
                      onChange={(e) => setUserType(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="india">Set-1</MenuItem>
                      <MenuItem value="australia">Set-2</MenuItem>
                      <MenuItem value="usa">Set-3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <Button
                  color="secondary"
                  variant="contained"
                  style={{ width: 250, height: 60 }}
                  onClick={toggleWeeklyDays}
                >
                  Set Weekdays
                </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.cardHeaderTitle}>
                  Create Timetable
                </Typography>
              }
              className={classes.cardHeader}
            />
            <Table className={classes.table} aria-label="simple table">
              <TableHead className={classes.tableHeader}>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell>Time table name</TableCell>
                  <TableCell>Opeartions</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={row.name}
                    className={
                      index % 2 === 0 ? classes.tableRow : classes.tableHeader
                    }
                  >
                    <TableCell>
                      {row.day}
                      <Button
                        style={{ color: 'blue' }}
                        onClick={togglePeriodTiming}
                      >
                        Assign
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            variant="contained"
            className={classes.saveBtn}
            startIcon={<SaveIcon />}
            color="primary"
          >
            Save Timetable
          </Button>
        </Grid>
      </Grid>
      <Dialog
        open={showWeeklyDays}
        onClose={toggleWeeklyDays}
        aria-labelledby="form-dialog-title"
        style={{ minWidth: 500 }}
      >
        <div className={classes.dialogHeader}>
          <DialogTitle
            id="form-dialog-title"
            className={classes.cardHeaderTitle}
          >
            Select Working Days
          </DialogTitle>
          <CloseIcon onClick={toggleWeeklyDays} className={classes.closeIcon} />
        </div>
        <DialogContent>
          <Typography variant="h6">Weekdays</Typography>
          <Divider />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="Sunday"
          />
          <Divider />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="Monday"
          />
          <Divider />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="Tuesday"
          />
          <Divider />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="Wednesday"
          />
          <Divider />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="Thursday"
          />
          <Divider />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="Friday"
          />
          <Divider />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="Saturday"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleWeeklyDays} color="primary">
            Cancel
          </Button>
          <Button
            onClick={toggleWeeklyDays}
            color="primary"
            variant="contained"
          >
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={showPeriodTiming}
        onClose={togglePeriodTiming}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <div className={classes.dialogHeader}>
          <DialogTitle
            id="form-dialog-title"
            className={classes.cardHeaderTitle}
          >
            Create Period Timing for Monday
          </DialogTitle>
          <CloseIcon
            onClick={togglePeriodTiming}
            className={classes.closeIcon}
          />
        </div>
        <DialogContent>
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableHead className={classes.tableHeader}>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Start Time</TableCell>
                  <TableCell>End Time</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableCell component="th">
                  <FormControl variant="filled">
                    <Select
                      value={userType}
                      variant="outlined"
                      onChange={(e) => setUserType(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="india">Break</MenuItem>
                      <MenuItem value="australia">Science</MenuItem>
                      <MenuItem value="usa">Mathmetics</MenuItem>
                      <MenuItem value="usa">English</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell component="th">
                  <FormControl variant="filled">
                    <Select
                      value={userType}
                      variant="outlined"
                      onChange={(e) => setUserType(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="india">11:00 AM</MenuItem>
                      <MenuItem value="australia">11:15 AM</MenuItem>
                      <MenuItem value="usa">12:00 PM</MenuItem>
                      <MenuItem value="usa">12:30PM</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell component="th">
                  <FormControl variant="filled">
                    <Select
                      value={userType}
                      variant="outlined"
                      onChange={(e) => setUserType(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="india">11:00 AM</MenuItem>
                      <MenuItem value="australia">11:15 AM</MenuItem>
                      <MenuItem value="usa">12:00 PM</MenuItem>
                      <MenuItem value="usa">12:30PM</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell component="th">
                  <Button variant="contained" color="primary">
                    Add Period
                  </Button>
                </TableCell>
                {periodRows.map((row, index) => (
                  <TableRow
                    key={row.name}
                    className={
                      index % 2 === 0 ? classes.tableRow : classes.tableHeader
                    }
                  >
                    <TableCell component="th">{row.subject}</TableCell>
                    <TableCell>{row.startTime}</TableCell>
                    <TableCell>{row.endTime}</TableCell>
                    <TableCell>
                      <HighlightOffIcon />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={togglePeriodTiming} color="primary">
            Cancel
          </Button>
          <Button
            onClick={togglePeriodTiming}
            color="primary"
            variant="contained"
          >
            Create Time Table
          </Button>
        </DialogActions>
      </Dialog>
    </Wrapper>
  );
};

export default AssignCourse;
