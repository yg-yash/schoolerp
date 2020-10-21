import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: fade(theme.palette.primary.main, 0.7),
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
    height: 380,
    width: 600,
    borderRadius: 3,
    margin: '0 10px 0 10px',
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
  loginBtn: {
    left: '35%',
    marginTop: 20,
    textTransform: 'uppercase',
  },
  label: {
    fontSize: 17,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export default useStyles;
