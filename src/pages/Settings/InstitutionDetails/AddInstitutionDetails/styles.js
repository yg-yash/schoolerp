import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    margin: 20,
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
    margin: '10px 0 0 10px',
  },
  cardHeader: {
    backgroundColor: theme.palette.primary.main,
    height: 30,
  },
  cardTitle: {
    color: 'white',
  },
}));

export default useStyles;
