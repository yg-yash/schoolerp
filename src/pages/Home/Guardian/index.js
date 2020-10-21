import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import MailIcon from '@material-ui/icons/Mail';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import ListIcon from '@material-ui/icons/List';

import styles from './styles';

const Guardian = () => {
  const classes = styles();
  return (
    <Grid container className={classes.container}>
      <Typography variant="h5" style={{ marginBottom: 15 }}>
        Welcome,Parent
      </Typography>
      <Grid container justify="space-between" spacing={5}>
        {[1].map((item, index) => (
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
                  <Typography variant="subtitle1" className={classes.details}>
                    Email: info@email.com
                  </Typography>
                </div>
                <div className={classes.detailsRow}>
                  <CalendarIcon className={classes.icon} />
                  <Typography variant="subtitle1" className={classes.details}>
                    Applied on 2017-02-18
                  </Typography>
                </div>
                <div className={classes.detailsRow}>
                  <ListIcon className={classes.icon} />
                  <Typography variant="subtitle1" className={classes.details}>
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
    </Grid>
  );
};

export default Guardian;
