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

const AcademicDetails = () => {
  const classes = styles();
  const [title, setTitle] = useState('');

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Card elevation={3} className={classes.card}>
          <CardHeader
            title={
              <Typography variant="h6" className={classes.cardHeaderTitle}>
                Create Template
              </Typography>
            }
            className={classes.cardHeader}
          />
          <CardContent>
            <div className={classes.inputContainer}>
              <Typography variant="body2">Email Template Name</Typography>
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
              <Typography variant="body2">
                Email Template Subject{' '}
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
              <Typography variant="body2">
                Template Message
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
    </Grid>
  );
};

export default AcademicDetails;
