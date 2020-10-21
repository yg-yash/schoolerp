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
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';

function createData(name, calories, fat, endate) {
  return { name, calories, fat, endate };
}

const rows = [
  createData('', 'DEM114', '@44da', ''),
  createData('', 'DEM104', 'Aman', ''),
  createData('', 'DEM104', 'Anu Rosee Tom', ''),
  createData('', 'DEM104', 'BHARAT', ''),
  createData('', 'DEM104', 'Bhavya', ''),
  createData('', 'DEM104', 'Jyothi Lekshmi S', ''),
  createData('', 'DEM104', 'Lakshmi P', ''),
  createData('', 'DEM104', 'PRANAV MOHAN', ''),
  createData('', 'DEM104', 'saad sdad', ''),
];
const ExamWiseResults = () => {
  const [userType, setUserType] = useState('');

  const classes = styles();

  return (
    <Grid container className={classes.container} spacing={2}>
      <Grid item xs={12}>
        <Card elevation={3} className={classes.card}>
          <CardHeader
            title={
              <Typography variant="h6" className={classes.cardHeaderTitle}>
                Enter Mark
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
                  Student <span className={classes.required}>*</span>
                </Typography>

                <FormControl variant="filled" className={classes.textField}>
                  <Select
                    value={userType}
                    variant="outlined"
                    onChange={(e) => setUserType(e.target.value)}
                    className={classes.select}
                  >
                    <MenuItem value="india">1211-Athira A G</MenuItem>
                    <MenuItem value="australia">12311-Athira AG</MenuItem>
                    <MenuItem value="usa">12311-Athira AG</MenuItem>
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
                    <MenuItem value="india">1211-Athira A G</MenuItem>
                    <MenuItem value="australia">12311-Athira AG</MenuItem>
                    <MenuItem value="usa">12311-Athira AG</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Card}>
          <CardHeader
            title={
              <Typography variant="h6" className={classes.cardHeaderTitle}>
                Enter Marks
              </Typography>
            }
            className={classes.cardHeader}
          />
          <Table className={classes.table} aria-label="simple table">
            <TableHead className={classes.tableHeader}>
              <TableRow>
                <TableCell>Stdent Roll No</TableCell>
                <TableCell>Student Admission.No</TableCell>
                <TableCell>Student Name</TableCell>
                <TableCell>Mark</TableCell>
                <TableCell></TableCell>
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
                    <TableCell>
                      <TextField variant="outlined" />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          variant="contained"
          color="primary"
          className={classes.saveBtn}
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

export default ExamWiseResults;
