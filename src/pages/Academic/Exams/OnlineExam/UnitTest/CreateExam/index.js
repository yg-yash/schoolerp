import React, { useState } from 'react';
import styles from './styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

function createData(name, calories, fat, endate, exam, mark) {
  return { name, calories, fat, endate, exam, mark };
}

const rows = [
  createData(1, 'STD 2', 'Batch A', 'Hindi', 'Hindi-test', 50),
  createData(2, 'STD 2', 'Batch A', 'GK', 'GK-1', 50),
];
const ExamWiseResults = () => {
  const [userType, setUserType] = useState('');

  const classes = styles();

  return (
    <Grid container className={classes.container} spacing={2}>
      <Grid item xs={12} md={6}>
        <Card elevation={3} className={classes.card}>
          <CardHeader
            title={
              <Typography variant="h6" className={classes.cardHeaderTitle}>
                Create Exam
              </Typography>
            }
            className={classes.cardHeader}
          />
          <CardContent className={classes.topCard}>
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
                  <MenuItem value="india">Employee</MenuItem>
                  <MenuItem value="australia">Guradian</MenuItem>
                  <MenuItem value="usa">Teacher</MenuItem>
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
                  <MenuItem value="india">Science Department</MenuItem>
                  <MenuItem value="australia">Guradian</MenuItem>
                  <MenuItem value="usa">Teacher</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.inputContainer}>
              <Typography variant="body2">
                Subject <span className={classes.required}>*</span>
              </Typography>

              <FormControl variant="filled" className={classes.textField}>
                <Select
                  value={userType}
                  variant="outlined"
                  onChange={(e) => setUserType(e.target.value)}
                  className={classes.select}
                >
                  <MenuItem value="india">exam1</MenuItem>
                  <MenuItem value="australia">exam2</MenuItem>
                  <MenuItem value="usa">exam3</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.inputContainer}>
              <Typography variant="body2">
                Exam Name <span className={classes.required}>*</span>
              </Typography>

              <FormControl variant="filled" className={classes.textField}>
                <Select
                  value={userType}
                  variant="outlined"
                  onChange={(e) => setUserType(e.target.value)}
                  className={classes.select}
                >
                  <MenuItem value="india">exam1</MenuItem>
                  <MenuItem value="australia">exam2</MenuItem>
                  <MenuItem value="usa">exam3</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.inputContainer}>
              <Typography variant="body2">
                Maximum Mark <span className={classes.required}>*</span>
              </Typography>

              <FormControl variant="filled" className={classes.textField}>
                <Select
                  value={userType}
                  variant="outlined"
                  onChange={(e) => setUserType(e.target.value)}
                  className={classes.select}
                >
                  <MenuItem value="india">exam1</MenuItem>
                  <MenuItem value="australia">exam2</MenuItem>
                  <MenuItem value="usa">exam3</MenuItem>
                </Select>
              </FormControl>
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
                <TableCell>SINO.</TableCell>
                <TableCell>Course</TableCell>
                <TableCell>Batch</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell>Exam Name</TableCell>
                <TableCell>Maximum Mark</TableCell>
                <TableCell>Manage</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => {
                return (
                  <TableRow
                    key={row.name}
                    className={
                      index % 2 === 0 ? classes.tableRow : classes.tableHeader
                    }
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell>{row.calories}</TableCell>
                    <TableCell>{row.fat}</TableCell>
                    <TableCell>{row.endate}</TableCell>
                    <TableCell>{row.exam}</TableCell>
                    <TableCell>{row.mark}</TableCell>
                    <TableCell>
                      <EditIcon color="primary" />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default ExamWiseResults;
