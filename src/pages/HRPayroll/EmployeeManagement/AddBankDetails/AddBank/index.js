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

const AddBank = ({ width }) => {
  const [title, setTitle] = useState('');
  const classes = styles();
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
                Bank Details
              </Typography>
            }
            className={classes.cardHeader}
          />
          <CardContent>
            <div className={classes.inputContainer}>
              <Typography variant="body2">
                Bank Name
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
                  <TableCell align="right">{row.dateOfSubmission}</TableCell>
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

export default AddBank;
