import AppBar from '@material-ui/core/AppBar';
import ArrowRight from '@material-ui/icons/ArrowRight';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { Wrapper } from '../../../components';
import styles from './styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import List from './List';
import CircularDetails from './CircularDetails';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const GenerateCertificateComponent = ({ width }) => {
  const classes = styles();

  const [value, setValue] = React.useState(0);
  const [title, setTitle] = React.useState('');
  const [userType, setUserType] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>Hostel</Typography>
          <ArrowRight />
          <Typography>Hostel Visitors</Typography>
        </Toolbar>
      </AppBar>

      <Grid container style={{ padding: 20 }}>
        <Card elevation={3} className={classes.card}>
          <CardHeader
            title={
              <Typography variant="h6" className={classes.cardHeaderTitle}>
                Room Transfer/Vacate
              </Typography>
            }
            className={classes.cardHeader}
          />
          <CardContent>
            <div className={classes.row}>
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
                    <MenuItem value="india">A</MenuItem>
                    <MenuItem value="australia">B</MenuItem>
                    <MenuItem value="usa">C</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className={classes.inputContainer}>
                <Typography variant="body2">Student Name</Typography>
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

              <Button variant="contained" color="primary">
                Go
              </Button>
            </div>
            <div className={classes.greenCard}>
              <Typography>Hostel:Nisa Hostel</Typography>
              <Typography>Floor:Room No:2-102</Typography>
              <Typography>Hostel Rent:2000</Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Fee Payment" {...a11yProps(0)} />
          <Tab label="Paid List" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <CircularDetails />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <List />
      </TabPanel>
    </Wrapper>
  );
};

export default GenerateCertificateComponent;
