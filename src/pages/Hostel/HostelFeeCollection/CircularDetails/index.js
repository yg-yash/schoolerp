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
import Checkbox from '@material-ui/core/Checkbox';

const AcademicDetails = () => {
  const classes = styles();
  const [title, setTitle] = useState('');
  const [userType, setUserType] = useState('');

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} md={6}>
        <Card elevation={3} className={classes.card}>
          <CardHeader
            title={
              <Typography variant="h6" className={classes.cardHeaderTitle}>
                Fee Payment
              </Typography>
            }
            className={classes.cardHeader}
          />
          <CardContent>
            <div className={classes.row}>
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
            </div>
            <div className={classes.row}>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Fine <span className={classes.required}>*</span>
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
                  Discount
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
                  Remarks
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
                  Mode Of Pay <span className={classes.required}>*</span>
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
                <div className={classes.row}>
                  <Typography variant="body2">
                    Do you want receipt{' '}
                    <span className={classes.required}>*</span>
                  </Typography>
                  <Checkbox />
                </div>
              </div>

              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Receipt No.
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
            <Button
              variant="contained"
              color="primary"
              className={classes.saveBtn}
              startIcon={<SaveIcon />}
            >
              Make Payment
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AcademicDetails;
