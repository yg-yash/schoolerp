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
import Print from '@material-ui/icons/Print';

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
    <Grid container>
      <Grid item xs={12} className={classes.column}>
        <Card elevation={3}>
          <CardHeader
            className={classes.cardHeader}
            title={
              <Typography variant="h6" className={classes.cardTitle}>
                Issued Certificate List
              </Typography>
            }
          ></CardHeader>
          <CardContent>
            <Card className={classes.card} elevation={3}>
              <div className={classes.row}>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Certificate For <span className={classes.required}>*</span>
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
                    Course <span className={classes.required}>*</span>
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
                    Batch <span className={classes.required}>*</span>
                  </Typography>
                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={endYear}
                      variant="outlined"
                      onChange={(e) => setEndYear(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="india">B</MenuItem>
                      <MenuItem value="australia">1999</MenuItem>
                      <MenuItem value="usa">2000</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
            </Card>
          </CardContent>
          <Button
            color="primary"
            variant="contained"
            className={classes.savebtn}
            startIcon={<Print />}
          >
            Print
          </Button>
        </Card>
      </Grid>
      <Grid item xs={12} className={classes.column}>
        <TableContainer component={Card}>
          <CardHeader
            className={classes.cardHeader}
            title={
              <Typography variant="h6" className={classes.cardTitle}>
                List
              </Typography>
            }
          ></CardHeader>
          <Table className={classes.table} aria-label="simple table">
            <TableHead className={classes.tableHeader}>
              <TableRow>
                <TableCell>Certificate Type</TableCell>
                <TableCell>Certificate Template</TableCell>
                <TableCell>Start Year</TableCell>
                <TableCell>End Year</TableCell>
                <TableCell>Certificate Issue Date</TableCell>
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
                  <TableCell>{row.fat}</TableCell>
                  <TableCell>{row.carbs}</TableCell>
                  <TableCell>{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default AcademicDetails;
