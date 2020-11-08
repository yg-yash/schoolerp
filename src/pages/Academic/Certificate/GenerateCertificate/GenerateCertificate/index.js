import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';

function createData(name, calories, fat, carbs, protein, status) {
  return { name, calories, fat, carbs, protein, status };
}

const rows = [
  createData(1, 2016, 'April', 2016, 'March', 'Active'),
  createData(2, 2016, 'April', 2017, 'Match', 'Active'),
  createData(3, 2017, '', 2018, 'March', 'Active'),
  createData(4, 2018, '', 2019, '', 'Active'),
];

const AcademicDetails = () => {
  const classes = styles();
  const [startYear, setStartYear] = useState('');
  const [startMonth, setStartMonth] = useState('');
  const [endYear, setEndYear] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [isActivate, setIsActivate] = useState('');

  return (
    <Card elevation={3}>
      <CardHeader
        className={classes.cardHeader}
        title={
          <Typography variant="h6" className={classes.cardTitle}>
            Generate Certificate
          </Typography>
        }
      ></CardHeader>
      <CardContent>
        <Grid container direction="row" justify="space-between" spacing={2}>
          <Grid item xs={12} className={classes.column}>
            <Card className={classes.card} elevation={3}>
              <div className={classes.row}>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Certificate Type <span className={classes.required}>*</span>
                  </Typography>
                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={startYear}
                      variant="outlined"
                      onChange={(e) => setStartYear(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="india">test</MenuItem>
                      <MenuItem value="australia">1999</MenuItem>
                      <MenuItem value="usa">2000</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Certificate Template{' '}
                    <span className={classes.required}>*</span>
                  </Typography>
                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={startMonth}
                      variant="outlined"
                      onChange={(e) => setStartMonth(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="india">January</MenuItem>
                      <MenuItem value="australia">February</MenuItem>
                      <MenuItem value="usa">March</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Certificate Error{' '}
                    <span className={classes.required}>*</span>
                  </Typography>
                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={endYear}
                      variant="outlined"
                      onChange={(e) => setEndYear(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="india">1998</MenuItem>
                      <MenuItem value="australia">1999</MenuItem>
                      <MenuItem value="usa">2000</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Start Year <span className={classes.required}>*</span>
                  </Typography>
                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={endMonth}
                      variant="outlined"
                      onChange={(e) => setEndMonth(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="india">January</MenuItem>
                      <MenuItem value="australia">February</MenuItem>
                      <MenuItem value="usa">March</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className={classes.row}>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">End Year</Typography>
                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={isActivate}
                      variant="outlined"
                      onChange={(e) => setIsActivate(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="india">Activate</MenuItem>
                      <MenuItem value="australia">Deactivate</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Certificate Issue Date
                  </Typography>
                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={isActivate}
                      variant="outlined"
                      onChange={(e) => setIsActivate(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="india">Activate</MenuItem>
                      <MenuItem value="australia">Deactivate</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">Department</Typography>
                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={isActivate}
                      variant="outlined"
                      onChange={(e) => setIsActivate(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="india">Maths</MenuItem>
                      <MenuItem value="australia">English</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} className={classes.column}>
            <TableContainer component={Card}>
              <CardHeader
                className={classes.cardHeader}
                title={
                  <Typography variant="h6" className={classes.cardTitle}>
                    Generate & Issue Certificate
                  </Typography>
                }
              ></CardHeader>

              <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tableHeader}>
                  <TableRow>
                    <TableCell>Student/Employee Register No.</TableCell>
                    <TableCell align="right">Student/Employee Name</TableCell>
                    <TableCell align="right">View Certificate</TableCell>
                    <TableCell align="right">Issue Certificate</TableCell>
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
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>{row.calories}</TableCell>
                      <TableCell>
                        <Button variant="contained" color="primary">
                          View Certificate
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button variant="contained" color="secondary">
                          Issue Certificate
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AcademicDetails;
