import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import { Wrapper } from '../../../components';
import styles from './styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Activity from './Activity';
import Schedule from './Schedule';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

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
const HomeTabs = ({ width }) => {
  const classes = styles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Wrapper padding={false}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          className={classes.toolBar}
        >
          <Tab
            label="Activity"
            icon={<ListAltIcon fontSize="small" />}
            className={classes.tab}
            {...a11yProps(0)}
          />
          <Tab
            label="Schedule"
            icon={<AccessTimeIcon fontSize="small" />}
            className={classes.tab}
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Activity />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Schedule />
      </TabPanel>
    </Wrapper>
  );
};

export default HomeTabs;
