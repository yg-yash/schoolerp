import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    // minHeight: '90vh',
  },
  containerRow: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    width: '100%',
    height: '100%',
    marginTop: 10,
  },
  headingText: {
    color: 'white',
  },
  description: {
    minHeight: 300,
  },
  cardHeader: {
    backgroundColor: theme.palette.primary.main,
    height: 20,
  },
  inputContainer: {
    width: '95%',
    padding: 10,
  },
  textFieldInput: {
    width: '100%',
    height: 40,
  },
  textField: {
    width: '100%',
    marginTop: 5,
  },
  column: {
    margin: 30,
  },
  card: {
    height: '100%',
    width: '100%',
  },
  required: {
    color: 'red',
  },
  select: {
    width: '100%',
    height: 40,
  },
  uploadBtn: {
    marginRight: 5,
  },
  btnRow: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  savebtn: {
    margin: '20px 0 20px 20px',
  },
  selectOptions: {
    height: 40,
    paddingTop: 15,
  },
}));

export default useStyles;
