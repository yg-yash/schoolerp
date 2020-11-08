import React from 'react';
import Typography from '@material-ui/core/Typography';

import styles from './styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

const AcademicDetails = () => {
  const classes = styles();
  return (
    <Card elevation={3}>
      <CardHeader
        className={classes.cardHeader}
        title={
          <Typography variant="h6" className={classes.cardTitle}>
            List
          </Typography>
        }
      ></CardHeader>
    </Card>
  );
};

export default AcademicDetails;
