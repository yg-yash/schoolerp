import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ArrowRight from '@material-ui/icons/ArrowRight';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import MailIcon from '@material-ui/icons/Mail';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import ListIcon from '@material-ui/icons/List';
import { Wrapper } from '../../../components';
import styles from './styles';

const ApplicantList = ({ width }) => {
  const classes = styles();
  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Settings</Typography>
          <ArrowRight />
          <Typography>Applicant List</Typography>
        </Toolbar>
      </AppBar>
      <Grid container className={classes.container}>
        <Card elevation={3} className={classes.card}>
          <CardHeader
            title={
              <Typography variant="h6" className={classes.cardHeaderTitle}>
                Applicants
              </Typography>
            }
            className={classes.cardHeader}
          />
          <CardContent style={{ marginTop: 20 }}>
            <Grid container justify="space-between" spacing={5}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                <Grid item md={6} xs={12} key={index}>
                  <Card elevation={6} className={classes.userCard}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg"
                      className={classes.avatar}
                    />
                    <div style={{ position: 'relative' }}>
                      <div className={classes.detailsRow}>
                        <MailIcon className={classes.icon} />
                        <Typography
                          variant="subtitle1"
                          className={classes.details}
                        >
                          Email: info@email.com
                        </Typography>
                      </div>
                      <div className={classes.detailsRow}>
                        <CalendarIcon className={classes.icon} />
                        <Typography
                          variant="subtitle1"
                          className={classes.details}
                        >
                          Applied on 2017-02-18
                        </Typography>
                      </div>
                      <div className={classes.detailsRow}>
                        <ListIcon className={classes.icon} />
                        <Typography
                          variant="subtitle1"
                          className={classes.details}
                        >
                          Number of Applicants:1
                        </Typography>
                      </div>
                      <Button
                        color="primary"
                        variant="contained"
                        className={classes.viewBtn}
                      >
                        View
                      </Button>
                    </div>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Wrapper>
  );
};

export default ApplicantList;
