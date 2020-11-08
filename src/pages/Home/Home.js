import { StatCard, Wrapper } from '../../components';
import React, { useState, useEffect } from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Grid from '@material-ui/core/Grid';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreIcon from '@material-ui/icons/More';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
import SettingsIcon from '@material-ui/icons/Settings';
import SchoolIcon from '@material-ui/icons/School';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ListAltIcon from '@material-ui/icons/ListAlt';
import HomeTabs from './HomeTabs';
import Student from './Student';
import Teacher from './Teacher';
import Guradian from './Guardian';

let id = 0;
function createData(name, date, progress) {
  id += 1;
  return { id, name, date, progress };
}

const data = [
  createData('UI prototyping', 'January 23', 67),
  createData('Design', 'February 2', 87),
  createData('Development', 'March 30', 54),
  createData('Testing and delivery', 'April 12', 34),
  createData('Ongoing maintanance', 'May 28', 56),
  createData('Extensive review', 'December 3', 56),
  createData('Extensive testing', 'December 25', 56),
];

const Home = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [role, setRole] = useState('');
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  useEffect(() => {
    const role = localStorage.getItem('role');
    setRole(role);
  }, []);

  const chartMenu = (
    <Menu
      id="chart-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <MoreIcon />
        </ListItemIcon>
        <ListItemText primary="View more" />
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <NotificationsOffIcon />
        </ListItemIcon>
        <ListItemText primary="Disable notifications" />
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Remove panel" />
      </MenuItem>
    </Menu>
  );

  // return props.history.location.state === 'student' ? (
  //   <Student />
  // ) : props.history.location.state === 'teacher' ? (
  //   <Teacher />
  // ) : props.history.location.state === 'guardian' ? (
  //   <Guradian />
  // ) : (
  return role === 'student' ? (
    <Student />
  ) : role === 'teacher' ? (
    <Teacher />
  ) : role === 'guardian' ? (
    <Guradian />
  ) : (
    <Wrapper>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            type="fill"
            title="Total Students"
            value={103}
            icon={<SchoolIcon style={{ color: 'white' }} />}
            color="#3f51b5"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            type="fill"
            title="Total Empioyees"
            value={230}
            icon={<AssignmentIndIcon />}
            color="#9c27b0"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            type="fill"
            title="Total Courses"
            value={323}
            icon={<MenuBookIcon />}
            color="#f44336"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            type="fill"
            title="Total Batches"
            value={870}
            icon={<ListAltIcon />}
            color="#ffd740"
          />
        </Grid>
        <Grid item xs={12}>
          <HomeTabs />
        </Grid>

        {/* {chartMenu} */}
        {/* {mockDashboard.map((chart, index) => (
          <Grid item xs={12} sm={12} md={4} key={index}>
            <Card>
              <CardHeader
                subheader={chart.title}
                action={
                  <IconButton id={`${index}-menu-button`} onClick={handleClick}>
                    <MoreVertIcon />
                  </IconButton>
                }
              />
              <CardContent>
                {chart.type === 'bar' && (
                  <Bar
                    data={chart.data}
                    height={chart.height}
                    options={chart.options}
                  />
                )}
                {chart.type === 'bubble' && (
                  <Bubble
                    data={chart.data}
                    height={chart.height}
                    options={chart.options}
                  />
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid item xs={12} sm={12} md={8}>
          <Paper className="table-responsive">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Project</TableCell>
                  <TableCell>Due Date</TableCell>
                  <TableCell>Current Progress</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((n) => (
                  <TableRow key={n.id}>
                    <TableCell component="th" scope="row">
                      {n.name}
                    </TableCell>
                    <TableCell>{n.date}</TableCell>
                    <TableCell>
                      {
                        <LinearProgress
                          variant="determinate"
                          value={n.progress}
                        />
                      }
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <NewsCard subtitle="Last updated 24 mins ago" feed={mockFeed} />
        </Grid>
        <Grid item sm={12} md={6}>
          <PostCard
            title="Shrimp and Chorizo Paella"
            subtitle="Yesterday"
            image={`${process.env.PUBLIC_URL}/static/images/unsplash/2.jpg`}
            imageHeight={200}
            text="Phileas Fogg and Aouda went on board, where they found Fix already installed. Below deck was a square cabin, of which the walls bulged out in the form of cots, above a circular divan; in the centre was a table provided with a swinging lamp."
            avatar={
              <Avatar aria-label="Post" style={{ backgroundColor: red[500] }}>
                R
              </Avatar>
            }
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <WeatherCard city="london" country="uk" days={7} />
        </Grid> */}
      </Grid>
    </Wrapper>
  );
};

export default Home;
