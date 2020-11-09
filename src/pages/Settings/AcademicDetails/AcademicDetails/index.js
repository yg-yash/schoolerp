import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import * as actions from '../../../../actions/settings/academic';
import { useDispatch, useSelector } from 'react-redux';

const years = [
  '2010',
  '2011',
  '2012',
  '2013',
  '2014',
  '2015',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const AcademicDetails = () => {
  const classes = styles();
  const [startYear, setStartYear] = useState('');
  const [startMonth, setStartMonth] = useState('');
  const [endYear, setEndYear] = useState('');
  const [endMonth, setEndMonth] = useState('');
  const [isActivate, setIsActivate] = useState('');

  const dispatch = useDispatch();

  const onSubmit = () => {
    if (!startYear || !startMonth || !endYear || !endMonth || !isActivate) {
      return;
    }
    const data = {
      startYear: parseInt(startYear),
      startMonth: startMonth.toLowerCase(),
      endMonth: endMonth.toLowerCase(),
      endYear: parseInt(endYear),
      status: isActivate.toLowerCase(),
    };

    dispatch(actions.addAcademicsRequest(data));
  };
  const { list, error } = useSelector((state) => state.academicReducer);
  const { isAddAcademicLoading } = useSelector((state) => state.loadingReducer);

  useEffect(() => {
    dispatch(actions.getAcademicsRequest());
  }, []);

  return (
    <Card elevation={3}>
      <CardHeader
        className={classes.cardHeader}
        title={
          <Typography variant="h6" className={classes.cardTitle}>
            Academic Details
          </Typography>
        }
      ></CardHeader>
      <CardContent>
        <Grid container direction="row" justify="space-between" spacing={2}>
          <Grid item xs={12} md={5} className={classes.column}>
            <Card className={classes.card} elevation={3}>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Start Year <span className={classes.required}>*</span>
                </Typography>
                <FormControl variant="filled" className={classes.textField}>
                  <Select
                    value={startYear}
                    variant="outlined"
                    onChange={(e) => setStartYear(e.target.value)}
                    className={classes.select}
                  >
                    {years.map((item, index) => (
                      <MenuItem value={item} key={index}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Start Month <span className={classes.required}>*</span>
                </Typography>
                <FormControl variant="filled" className={classes.textField}>
                  <Select
                    value={startMonth}
                    variant="outlined"
                    onChange={(e) => setStartMonth(e.target.value)}
                    className={classes.select}
                  >
                    {months.map((item, index) => (
                      <MenuItem value={item} index={index}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  End Year <span className={classes.required}>*</span>
                </Typography>
                <FormControl variant="filled" className={classes.textField}>
                  <Select
                    value={endYear}
                    variant="outlined"
                    onChange={(e) => setEndYear(e.target.value)}
                    className={classes.select}
                  >
                    {years.map((item, index) => (
                      <MenuItem value={item} key={index}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  End Month <span className={classes.required}>*</span>
                </Typography>
                <FormControl variant="filled" className={classes.textField}>
                  <Select
                    value={endMonth}
                    variant="outlined"
                    onChange={(e) => setEndMonth(e.target.value)}
                    className={classes.select}
                  >
                    {months.map((item, index) => (
                      <MenuItem value={item} key={index}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
              <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Activate / Deactivate{' '}
                  <span className={classes.required}>*</span>
                </Typography>
                <FormControl variant="filled" className={classes.textField}>
                  <Select
                    value={isActivate}
                    variant="outlined"
                    onChange={(e) => setIsActivate(e.target.value)}
                    className={classes.select}
                  >
                    <MenuItem value="active">Activate</MenuItem>
                    <MenuItem value="deactivate">Deactivate</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <Typography variant="body2" className={classes.errorText}>
                {error && error.error}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.savebtn}
                startIcon={<SaveIcon />}
                onClick={onSubmit}
                disable={
                  !startYear ||
                  !startMonth ||
                  !endYear ||
                  !endMonth ||
                  !isActivate
                }
              >
                {isAddAcademicLoading ? (
                  <CircularProgress color="secondary" />
                ) : (
                  'Save'
                )}
              </Button>
            </Card>
          </Grid>
          <Grid item xs={12} md={6} className={classes.column}>
            <TableContainer component={Card}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tableHeader}>
                  <TableRow>
                    <TableCell>SI.No.</TableCell>
                    <TableCell align="right">Start Year</TableCell>
                    <TableCell align="right">Start Month</TableCell>
                    <TableCell align="right">End Year</TableCell>
                    <TableCell align="right">End Month</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Manage</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {list.map((row, index) => (
                    <TableRow
                      key={row.name}
                      className={
                        index % 2 === 0 ? classes.tableRow : classes.tableHeader
                      }
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.tableCell}
                      >
                        {index + 1}
                      </TableCell>
                      <TableCell align="right" className={classes.tableCell}>
                        {row.startYear}
                      </TableCell>
                      <TableCell align="right" className={classes.tableCell}>
                        {row.startMonth}
                      </TableCell>
                      <TableCell align="right" className={classes.tableCell}>
                        {row.endYear}
                      </TableCell>
                      <TableCell align="right" className={classes.tableCell}>
                        {row.endMonth}
                      </TableCell>
                      <TableCell align="right" className={classes.tableCell}>
                        {row.status}
                      </TableCell>
                      <TableCell align="right">
                        <EditIcon color="primary" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AcademicDetails;
