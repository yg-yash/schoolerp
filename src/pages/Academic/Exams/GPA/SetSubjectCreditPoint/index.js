import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { Wrapper } from '../../../../../components';
import AppBar from '@material-ui/core/AppBar';
import ArrowRight from '@material-ui/icons/ArrowRight';
import Toolbar from '@material-ui/core/Toolbar';
import SaveIcon from '@material-ui/icons/Save';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'date-fns';

const AddInstitutionDetails = () => {
  const classes = styles();
  const [name, setName] = useState('');
  const [userType, setUserType] = useState();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Wrapper padding={false}>
        <AppBar position="static" color="primary">
          <Toolbar className={classes.toolBar}>
            <Typography>Academic</Typography>
            <ArrowRight />
            <Typography>Exams</Typography>
            <ArrowRight />
            <Typography>GPA</Typography>
            <ArrowRight />
            <Typography>Set Subject Credit Point</Typography>
          </Toolbar>
        </AppBar>
        <Grid container className={classes.container}>
          <Grid item xs={10} className={classes.column}>
            <Card elevation={3} className={classes.card}>
              <CardHeader
                title={
                  <Typography variant="h6" className={classes.headingText}>
                    Set Subject Credit Point
                  </Typography>
                }
                className={classes.cardHeader}
              />
              <CardContent>
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
                      <MenuItem value="india"> 1</MenuItem>
                      <MenuItem value="australia"> 2</MenuItem>
                      <MenuItem value="usa"> 3</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Subject Credit Point
                    <span className={classes.required}>*</span>
                  </Typography>
                  <TextField
                    variant="outlined"
                    InputProps={{
                      className: classes.textFieldInput,
                    }}
                    className={classes.textField}
                    value={name}
                    onChange={(e) => setName(e.target.vallue)}
                  />
                </div>
              </CardContent>
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
        </Grid>
      </Wrapper>
    </MuiPickersUtilsProvider>
  );
};

export default AddInstitutionDetails;
