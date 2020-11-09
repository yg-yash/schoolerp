import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import { Wrapper } from '../../../../components';
import AppBar from '@material-ui/core/AppBar';
import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowRight from '@material-ui/icons/ArrowRight';
import Toolbar from '@material-ui/core/Toolbar';
import SaveIcon from '@material-ui/icons/Save';

import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../../actions/academic/subjects';

const Subjects = () => {
  const classes = styles();
  const [name, setName] = useState('');
  const [code, setCode] = useState('');

  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.subjectReducer);
  const { isSubjectAdding } = useSelector((state) => state.loadingReducer);

  const onSubmit = () => {
    const data = {
      name,
      code,
    };
    dispatch(actions.addRequest(data));
  };

  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Academic</Typography>
          <ArrowRight />
          <Typography>Subjects</Typography>
          <ArrowRight />
          <Typography>Subjects</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container}>
        <Grid item xs={10} className={classes.column}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.headingText}>
                  Add Subject
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Subject Name <span className={classes.required}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  InputProps={{
                    className: classes.textFieldInput,
                    value: name,
                    onChange: (e) => setName(e.target.value),
                  }}
                  className={classes.textField}
                />
              </div>
              <div className={`${classes.inputContainer}`}>
                <Typography variant="body2">
                  Subject Code <span className={classes.required}>*</span>
                </Typography>
                <TextField
                  variant="outlined"
                  InputProps={{
                    className: classes.textFieldInput,
                    value: code,
                    onChange: (e) => setCode(e.target.value),
                  }}
                  className={classes.textField}
                />
              </div>
            </CardContent>
            <Typography variant="body2" className={classes.errorText}>
              {error && error.error}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.savebtn}
              startIcon={!isSubjectAdding && <SaveIcon />}
              onClick={onSubmit}
            >
              {isSubjectAdding ? (
                <CircularProgress color="secondary" />
              ) : (
                'Save'
              )}
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Subjects;
