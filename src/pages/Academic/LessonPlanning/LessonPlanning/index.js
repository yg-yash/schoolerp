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
import { Wrapper } from '../../../../components';
import AppBar from '@material-ui/core/AppBar';
import ArrowRight from '@material-ui/icons/ArrowRight';
import Toolbar from '@material-ui/core/Toolbar';
import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';

const Subjects = () => {
  const classes = styles();
  const [userType, setUserType] = useState();
  const [name, setName] = useState('');

  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Academic</Typography>
          <ArrowRight />
          <Typography>Lesson Planning</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container}>
        <Grid item xs={10} className={classes.column}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.headingText}>
                  Lesson Planning
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent>
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
                    <MenuItem value="india">STD I</MenuItem>
                    <MenuItem value="australia">STD II</MenuItem>
                    <MenuItem value="usa">STD IV</MenuItem>
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
                    <MenuItem value="india">A</MenuItem>
                    <MenuItem value="australia">B</MenuItem>
                    <MenuItem value="australia">C</MenuItem>
                  </Select>
                </FormControl>
              </div>

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
                    <MenuItem value="india">English - ENG1001</MenuItem>
                    <MenuItem value="australia">GK - GK1001</MenuItem>
                    <MenuItem value="australia">Chemistry - CH1001</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className={classes.textFieldRow}>
                <div className={classes.inputContainerRow}>
                  <TextField
                    variant="outlined"
                    InputProps={{
                      className: classes.textFieldInput,
                    }}
                    placeholder="Lecture Code"
                    className={classes.textField}
                    value={name}
                    onChange={(e) => setName(e.target.vallue)}
                  />
                </div>
                <div className={classes.inputContainerRow}>
                  <TextField
                    variant="outlined"
                    InputProps={{
                      className: classes.textFieldInput,
                    }}
                    placeholder="Topic"
                    className={classes.textField}
                    value={name}
                    onChange={(e) => setName(e.target.vallue)}
                  />
                </div>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.savebtn}
                >
                  <AddIcon />
                </Button>
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
  );
};

export default Subjects;
