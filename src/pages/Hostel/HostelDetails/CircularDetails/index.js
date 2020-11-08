import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
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
  const [title, setTitle] = useState('');

  return (
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
                Add Hostel Type
              </Typography>
            }
            className={classes.cardHeader}
          />
          <CardContent>
            <div className={classes.inputContainer}>
              <Typography variant="body2">
                Hostel Type
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
                <TableCell align="right">Leave Category</TableCell>
                <TableCell align="right">Name</TableCell>
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
  );
};

export default AcademicDetails;
