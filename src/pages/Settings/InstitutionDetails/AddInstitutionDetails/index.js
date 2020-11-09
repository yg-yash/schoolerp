import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import styles from './styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardContent';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import SaveIcon from '@material-ui/icons/Save';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../../actions/settings/institution';

const AddInstitutionDetails = () => {
  const classes = styles();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [mobile, setMobile] = useState('');
  const [fax, setFax] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [country, setCountry] = useState('');
  const [currencyType, setCurrencyType] = useState('');

  const [code, setCode] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.institutionReducer);
  const { isInstitutionAdding } = useSelector((state) => state.loadingReducer);

  const onSubmit = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('address', address);
    formData.append('phone', phone);
    formData.append('mobile', mobile);
    formData.append('fax', fax);
    formData.append('contactPerson', contactPerson);
    formData.append('country', country);
    formData.append('currencyType', currencyType);
    formData.append('code', code);
    formData.append('timeZone', timeZone);
    formData.append('file', file);

    dispatch(actions.addInstitutionRequest(formData));
  };
  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Card elevation={3}>
          <CardHeader className={classes.cardHeader}>
            <Typography variant="h6" className={classes.cardTitle}>
              Institution Details
            </Typography>
          </CardHeader>
          <Grid container direction="row" spacing={2}>
            <Grid item md={4} xs={12} className={classes.column}>
              <Card className={classes.card}>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Institution Name <span className={classes.required}>*</span>
                  </Typography>
                  <TextField
                    variant="outlined"
                    InputProps={{
                      className: classes.textFieldInput,
                      value: name,
                      onChange: (e) => setName(e.target.value),
                    }}
                    className={classes.textField}
                  />
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Institution Address{' '}
                    <span className={classes.required}>*</span>
                  </Typography>
                  <TextField
                    variant="outlined"
                    InputProps={{
                      className: classes.textFieldInput,
                      value: address,
                      onChange: (e) => setAddress(e.target.value),
                    }}
                    className={classes.textField}
                  />
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Institution Phone{' '}
                    <span className={classes.required}>*</span>
                  </Typography>
                  <TextField
                    variant="outlined"
                    InputProps={{
                      className: classes.textFieldInput,
                      value: phone,
                      onChange: (e) => setPhone(e.target.value),
                    }}
                    className={classes.textField}
                  />
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Institution Mobile{' '}
                    <span className={classes.required}>*</span>
                  </Typography>
                  <TextField
                    variant="outlined"
                    InputProps={{
                      className: classes.textFieldInput,
                      value: mobile,
                      onChange: (e) => setMobile(e.target.value),
                    }}
                    className={classes.textField}
                  />
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Institution Fax <span className={classes.required}>*</span>
                  </Typography>
                  <TextField
                    variant="outlined"
                    InputProps={{
                      className: classes.textFieldInput,
                      value: fax,
                      onChange: (e) => setFax(e.target.value),
                    }}
                    className={classes.textField}
                  />
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Admin Contact Person{' '}
                    <span className={classes.required}>*</span>
                  </Typography>
                  <TextField
                    variant="outlined"
                    InputProps={{
                      className: classes.textFieldInput,
                      value: contactPerson,
                      onChange: (e) => setContactPerson(e.target.value),
                    }}
                    className={classes.textField}
                  />
                </div>
                <Typography variant="body2" className={classes.errorText}>
                  {error && error.error}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.savebtn}
                  startIcon={!isInstitutionAdding && <SaveIcon />}
                  onClick={onSubmit}
                >
                  {isInstitutionAdding ? (
                    <CircularProgress color="secondary" />
                  ) : (
                    'Save'
                  )}
                </Button>
              </Card>
            </Grid>
            <Grid item md={5} xs={12} className={classes.column}>
              <Card className={classes.card}>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Country <span className={classes.required}>*</span>
                  </Typography>
                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={country}
                      variant="outlined"
                      onChange={(e) => setCountry(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="india">India</MenuItem>
                      <MenuItem value="australia">Australia</MenuItem>
                      <MenuItem value="usa">USA</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Currency Type <span className={classes.required}>*</span>
                  </Typography>
                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={currencyType}
                      variant="outlined"
                      onChange={(e) => setCurrencyType(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="qar">QAR</MenuItem>
                      <MenuItem value="rupee">Rupees</MenuItem>
                      <MenuItem value="dollars">Dollars</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">Language</Typography>
                  <TextField
                    variant="outlined"
                    InputProps={{
                      className: classes.textFieldInput,
                    }}
                    disabled
                    className={classes.textField}
                    value="English"
                  />
                </div>
                {/* <div className={classes.inputContainer}>
                <Typography variant="body2">
                  Institution code(This code will be used as the prefix for
                  student admission number)
                </Typography>
                <Checkbox
                  checked={codeChecked}
                  color="primary"
                  style={{
                    padding: 0,
                    margin: 0,
                  }}
                  onChange={(e) => setCodeChecked(e.target.checked)}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </div> */}
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Institution Code <span className={classes.required}>*</span>
                  </Typography>
                  <TextField
                    variant="outlined"
                    InputProps={{
                      className: classes.textFieldInput,
                    }}
                    className={classes.textField}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Timezone <span className={classes.required}>*</span>
                  </Typography>
                  <FormControl variant="filled" className={classes.textField}>
                    <Select
                      value={timeZone}
                      variant="outlined"
                      onChange={(e) => setTimeZone(e.target.value)}
                      className={classes.select}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="qar">
                        Middle East Time(MET) - GMT +03:30
                      </MenuItem>
                      <MenuItem value="rupee">Rupees</MenuItem>
                      <MenuItem value="dollars">Dollars</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={classes.inputContainer}>
                  <Typography variant="body2">
                    Upload Logo <span className={classes.required}>*</span>
                  </Typography>

                  <div className={classes.btnRow}>
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="fees-allocation-upload"
                      multiple
                      type="file"
                      hidden
                      onChange={onFileChange}
                    />
                    <label htmlFor="fees-allocation-upload">
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.uploadBtn}
                        component="span"
                        startIcon={<AttachFileIcon />}
                      >
                        Choose File
                      </Button>
                    </label>
                    <Typography variant="body2">
                      {file ? file.name : 'No File Choosen'}
                    </Typography>
                  </div>
                </div>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AddInstitutionDetails;
