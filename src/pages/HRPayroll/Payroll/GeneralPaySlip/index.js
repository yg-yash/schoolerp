import AppBar from '@material-ui/core/AppBar';
import ArrowRight from '@material-ui/icons/ArrowRight';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { Wrapper } from '../../../../components';
import styles from './styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Report from './Report';
import Generate from './General';

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Wrapper padding={false}>
      <AppBar position="static" color="primary">
        <Toolbar className={classes.toolBar}>
          <Typography>HR/Payroll</Typography>
          <ArrowRight />
          <Typography>Payroll</Typography>
          <ArrowRight />
          <Typography>Generate Pay Slip</Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Generate Pay Slip" {...a11yProps(0)} />
            <Tab label="Report" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Report />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Generate />
        </TabPanel>
      </div>
    </Wrapper>
  );
};

export default GenerateCertificateComponent;
