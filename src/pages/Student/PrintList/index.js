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
import { Wrapper } from '../../../components';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import PrintIcon from '@material-ui/icons/Print';
import styles from './styles';

const AssignCourse = ({ width }) => {
  const [userType, setUserType] = useState('');
  const [checked, setChecked] = React.useState([0]);
  const [title, setTitle] = useState('');
  const [list, setList] = useState([
    'STD I',
    'STD II',
    'STD III',
    'STD IV',
    'STD V',
    'STD VI',
    'STD VII',
    'STD VIII',
    'STD IX',
    'STD X',
    'STD XI',
    'STD XII',
  ]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const classes = styles();
  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Student</Typography>
          <ArrowRight />
          <Typography>Print List</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.cardHeaderTitle}>
                  Reports Generation
                </Typography>
              }
              className={classes.cardHeader}
            />
            <div className={classes.inputContainer}>
              <Typography variant="body2">
                Report Type <span className={classes.required}>*</span>
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
            <CardContent>
              <Button
                variant="contained"
                color="primary"
                className={classes.saveBtn}
                startIcon={<PrintIcon />}
              >
                Print PDF
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default AssignCourse;
