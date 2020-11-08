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
import styles from './styles';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';

const AssignCourse = ({ width }) => {
  const [checked, setChecked] = React.useState([0]);
  const [title, setTitle] = useState('');

  const classes = styles();
  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Store Management</Typography>
          <ArrowRight />
          <Typography>Vendors</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container}>
        <Grid item xs={12} md={6}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.cardHeaderTitle}>
                  Add Vendors
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Company Name <span className={classes.required}>*</span>
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
                  Company Phone <span className={classes.required}>*</span>
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
                  Company Email <span className={classes.required}>*</span>
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
                  Country
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
                  State
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
                  City
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
              <Typography variant="body2">
                Details of Contact Person
                <span className={classes.required}>*</span>
              </Typography>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Name
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
                  Address
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
                  Phone
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
              <Typography variant="body2">
                Bank Details
                <span className={classes.required}>*</span>
              </Typography>
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
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Branch Name
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
                  Account No.
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
                  IFSC Code
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
                Create
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default AssignCourse;
