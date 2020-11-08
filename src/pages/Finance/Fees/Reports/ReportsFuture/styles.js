import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cardHeader: {
    backgroundColor: theme.palette.primary.main,
    height: 30,
  },
  cardTitle: {
    color: 'white',
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
    margin: 10,
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
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

  savebtn: {
    margin: 10,
  },
  tableHeader: {
    backgroundColor: '#e0e0e0',
  },
  tableRow: {
    backgroundColor: 'white',
  },
  orangeItem: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#ffecb3',
    padding: theme.spacing(2),
    borderLeft: '4px solid orange',
  },
  infoicon: {
    marginRight: 5,
    color: 'orange',
  },
}));

export default useStyles;
