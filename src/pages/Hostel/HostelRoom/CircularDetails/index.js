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
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

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
  const [userType, setUserType] = useState('');

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
                Add Hostel Room
              </Typography>
            }
            className={classes.cardHeader}
          />
          <CardContent>
            <div className={classes.inputContainer}>
              <Typography variant="body2">
                Hostel Type <span className={classes.required}>*</span>
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
                Hostel Name <span className={classes.required}>*</span>
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
                Floor Name
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
              <Typography variant="body2">Room No.</Typography>
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
              <Typography variant="body2">No. of Beds</Typography>
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
              <Typography variant="body2">Amount</Typography>
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
              <IconButton color="primary">
                <AddIcon />
              </IconButton>
            </div>
            <div className={classes.inputContainer}>
              <Typography variant="body2">
                Fee Type <span className={classes.required}>*</span>
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
    </Grid>
  );
};

export default AcademicDetails;
