import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const Skills = () => {
  const classes = styles();
  const [name, setName] = useState('');

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.column}>
        <Card elevation={3} className={classes.card}>
          <CardHeader
            className={classes.cardHeader}
            title={
              <Typography
                variant="h6"
                color="textPrimary"
                style={{ width: '100%', color: 'white' }}
              >
                Skills
              </Typography>
            }
          />
          <CardContent className={classes.row}>
            <div className={classes.inputContainer}>
              <Typography variant="body2">
                Skill
                <span className={classes.required}>*</span>
              </Typography>
              <TextField
                variant="outlined"
                InputProps={{
                  className: classes.textFieldInput,
                }}
                className={classes.textField}
                value={name}
                onChange={(e) => setName(e.target.vallue)}
              />
            </div>
          </CardContent>
          <Button
            variant="contained"
            color="primary"
            className={classes.saveBtn}
            startIcon={<SaveIcon />}
          >
            Save
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Skills;
