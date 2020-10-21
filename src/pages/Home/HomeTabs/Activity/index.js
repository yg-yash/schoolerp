import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Typography from '@material-ui/core/Typography';
import { Bar, Bubble, Pie } from 'react-chartjs-2';
import { mockDashboard, mockFeed } from '../../../../utils/mock';
import ContactlessIcon from '@material-ui/icons/Contactless';
import styles from './styles';

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

const Activity = () => {
  const classes = styles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  return (
    <Grid>
      <Grid container direction="row" justify="space-between" spacing={2}>
        <Grid item xs={6} sm={6} md={6}>
          <Card>
            <CardHeader
              subheader={mockDashboard[0].title}
              action={
                <IconButton onClick={handleClick}>
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <CardContent>
              <Bar
                data={mockDashboard[0].data}
                height={mockDashboard[0].height}
                options={mockDashboard[0].options}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} className={classes.rightCard}>
          <Grid item xs={6}>
            <Card elevation={3} className={classes.smallCard}>
              <CardContent className={classes.smallCardContent}>
                <ContactlessIcon fontSize="large" className={classes.icon} />
                <p className={classes.count}>3</p>

                <Typography className={classes.detailsText}>
                  Total Alumni Members
                </Typography>
                <div style={{ marginTop: 20 }}>
                  <Bar
                    data={mockDashboard[0].data}
                    height={mockDashboard[0].height}
                    options={mockDashboard[0].options}
                  />
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card elevation={3} className={classes.smallCard}>
              <CardContent className={classes.smallCardContent}>
                <ContactlessIcon fontSize="large" className={classes.icon} />
                <p className={classes.count}>1</p>

                <Typography className={classes.detailsText}>
                  Total Admin Users
                </Typography>
                <div style={{ marginTop: 20 }}>
                  <Bar
                    data={mockDashboard[0].data}
                    height={mockDashboard[0].height}
                    options={mockDashboard[0].options}
                  />
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        {/* {mockDashboard.map((chart, index) => (
          <Grid item xs={12} sm={12} md={6} key={index}>
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
        </Grid> */}
      </Grid>
    </Grid>
  );
};

export default Activity;
