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
import PrintIcon from '@material-ui/icons/Print';

function createData(name, calories, fat, endate) {
  return { name, calories, fat, endate };
}

const rows = [
  createData(1, 'exam1', '', 'Exam Not Attended'),
  createData(2, 'exam2', '', 'Exam Not Attended'),
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
                Student wise result
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
            </div>
            <div style={{ flex: 0.5 }}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.saveBtn}
                startIcon={<PrintIcon />}
              >
                Print
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
                Student wise result
              </Typography>
            }
            className={classes.cardHeader}
          />
          <Table className={classes.table} aria-label="simple table">
            <TableHead className={classes.tableHeader}>
              <TableRow>
                <TableCell>SINO.</TableCell>
                <TableCell>Exam name</TableCell>
                <TableCell>Mark</TableCell>
                <TableCell>Result</TableCell>
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
