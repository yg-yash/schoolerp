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

const CircularDetails = () => {
  const classes = styles();
  const [title, setTitle] = useState('');

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} md={6}>
        <Card elevation={3} className={classes.card}>
          <CardHeader
            title={
              <Typography variant="h6" className={classes.cardHeaderTitle}>
                Add An Account
              </Typography>
            }
            className={classes.cardHeader}
          />
          <CardContent>
            <div className={classes.row}>
              <div className={classes.inputContainer}>
                <Typography variant="body2">Out Going Mail Server</Typography>
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
            </div>
            <div className={classes.row}>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Port Number <span className={classes.required}>*</span>
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
                  Account Name
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
            </div>
            <div className={classes.row}>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Username
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
                  Password <span className={classes.required}>*</span>
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

export default CircularDetails;
