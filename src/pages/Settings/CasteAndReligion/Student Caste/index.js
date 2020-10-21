import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';

function createData(name, calories, fat, carbs, protein, status) {
  return { name, calories, fat, carbs, protein, status };
}

const rows = [
  createData(1, 'Caste', 'April'),
  createData(2, 'Caste 2', 'April'),
];

const AcademicDetails = () => {
  const classes = styles();
  const [caste, setCaste] = useState('');

  return (
    <Grid container className={classes.container}>
      <div className={classes.containerRow}>
        <Card elevation={3} className={classes.card}>
          <CardHeader
            title={
              <Typography
                variant="h6"
                color="textPrimary"
                style={{ color: 'white' }}
              >
                Student Caste
              </Typography>
            }
            className={classes.cardHeader}
          />
          <CardContent className={classes.row}>
            <Grid item xs={6} className={classes.column}>
              <Card elevation={3}>
                <CardHeader
                  title={
                    <Typography variant="h6" color="textPrimary">
                      Add Caste
                    </Typography>
                  }
                />
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Caste Name
                    <span className={classes.required}>*</span>
                  </Typography>
                  <TextField
                    variant="outlined"
                    InputProps={{
                      className: classes.textFieldInput,
                    }}
                    className={classes.textField}
                    value={caste}
                    onChange={(e) => setCaste(e.target.vallue)}
                  />
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.savebtn}
                  startIcon={<SaveIcon />}
                >
                  Save
                </Button>
              </Card>
            </Grid>
            <Grid item xs={3} className={classes.column}>
              <TableContainer component={Card}>
                <TableContainer
                  className={classes.table}
                  aria-label="simple table"
                >
                  <TableHead className={classes.tableHeader}>
                    <TableRow>
                      <TableCell>SI.No.</TableCell>
                      <TableCell align="right">Caste</TableCell>
                      <TableCell align="right">Manage</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow
                        key={row.name}
                        className={
                          index % 2 === 0
                            ? classes.tableRow
                            : classes.tableHeader
                        }
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">
                          <EditIcon color="primary" />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </TableContainer>
              </TableContainer>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </Grid>
  );
};

export default AcademicDetails;
