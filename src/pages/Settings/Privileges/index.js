import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
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
import Paper from '@material-ui/core/Paper';
import styles from './styles';

import Checkbox from '@material-ui/core/Checkbox';
const Privileges = ({ width }) => {
  const [userType, setUserType] = useState('');
  const [selected, setSelected] = useState([]);
  const classes = styles();
  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Settings</Typography>
          <ArrowRight />
          <Typography>Privileges</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Card elevation={3} className={classes.card}>
            <CardHeader
              title={
                <Typography variant="h6" className={classes.cardHeaderTitle}>
                  Privileges Settings
                </Typography>
              }
              className={classes.cardHeader}
            />
            <CardContent>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  User Type <span className={classes.required}>*</span>
                </Typography>
                <FormControl variant="filled" className={classes.textField}>
                  <Select
                    value={userType}
                    variant="outlined"
                    onChange={(e) => setUserType(e.target.value)}
                    className={classes.select}
                  >
                    <MenuItem value="india">Student</MenuItem>
                    <MenuItem value="australia">Guradian</MenuItem>
                    <MenuItem value="usa">Teacher</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} className={classes.itemContainer}>
          <Card elevation={3} className={classes.itemCard}>
            <div className={classes.itemRow}>
              <Card elevation={5} className={classes.smallCard}>
                <CardHeader
                  title={
                    <Typography
                      variant="h6"
                      className={classes.cardHeadingTitle}
                    >
                      Set Privilege
                    </Typography>
                  }
                  className={classes.heading}
                />
                <CardContent style={{ padding: 0 }}>
                  <div className={classes.itemHeading}>
                    <Paper className={classes.leftHeading}>
                      <p className={classes.headingText}>Modules</p>
                    </Paper>
                    <Paper className={classes.rightHeading}>
                      <p className={classes.headingText}>Enable/Disable</p>
                    </Paper>
                  </div>
                  <div className={classes.content}>
                    <div style={{ flex: 1.5 }}>
                      <p className={classes.sectionHeading}>All Modules</p>
                      <p className={classes.sectionText}>
                        All Modules(Only for Super Admin)
                      </p>
                      <p className={classes.sectionHeading}>Settings</p>
                      <p className={classes.sectionText}>
                        Institutional Details
                      </p>
                      <p className={classes.sectionText}>Academic Details</p>
                      <p className={classes.sectionText}>Student Import</p>
                    </div>
                    <div style={{ flex: 1 }}>
                      <p></p>
                      <Checkbox
                        checked={selected[0]}
                        color="primary"
                        onChange={(value) => setSelected(value)}
                      />
                      <p></p>
                      <div>
                        <Checkbox
                          color="primary"
                          checked={selected[0]}
                          onChange={(value) => setSelected(value)}
                        />
                      </div>
                      <div>
                        <Checkbox
                          color="primary"
                          checked={selected[0]}
                          onChange={(value) => setSelected(value)}
                        />
                      </div>
                      <div>
                        <Checkbox
                          color="primary"
                          checked={selected[0]}
                          onChange={(value) => setSelected(value)}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card elevation={5} className={classes.smallCard}>
                <CardHeader
                  title={
                    <Typography
                      variant="h6"
                      className={classes.cardHeadingTitle}
                    >
                      User Type
                    </Typography>
                  }
                  className={classes.heading}
                />
                <CardContent style={{ padding: 0 }}>
                  <div className={classes.itemHeading}>
                    <Paper className={classes.leftHeading}>
                      <p className={classes.headingText}>Modules</p>
                    </Paper>
                    <Paper className={classes.rightHeading}>
                      <p className={classes.headingText}>Enable/Disable</p>
                    </Paper>
                  </div>
                  <div className={classes.content}>
                    <div style={{ flex: 1.5 }}>
                      <p className={classes.sectionHeading}>All Modules</p>
                      <p className={classes.sectionText}>
                        All Modules(Only for Super Admin)
                      </p>
                      <p className={classes.sectionHeading}>Settings</p>
                      <p className={classes.sectionText}>
                        Institutional Details
                      </p>
                      <p className={classes.sectionText}>Academic Details</p>
                      <p className={classes.sectionText}>Student Import</p>
                    </div>
                    <div style={{ flex: 1 }}>
                      <p></p>
                      <Checkbox
                        checked={selected[0]}
                        color="primary"
                        onChange={(value) => setSelected(value)}
                      />
                      <p></p>
                      <div>
                        <Checkbox
                          color="primary"
                          checked={selected[0]}
                          onChange={(value) => setSelected(value)}
                        />
                      </div>
                      <div>
                        <Checkbox
                          color="primary"
                          checked={selected[0]}
                          onChange={(value) => setSelected(value)}
                        />
                      </div>
                      <div>
                        <Checkbox
                          color="primary"
                          checked={selected[0]}
                          onChange={(value) => setSelected(value)}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Privileges;
