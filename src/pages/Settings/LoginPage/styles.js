import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  card: {
    //width: '30%',
  },
  cardHeader: {
    backgroundColor: theme.palette.primary.main,
    height: 20,
  },
  cardHeaderTitle: {
    fontSize: 10,
    color: 'white',
  },
  uploadBtn: {
    marginRight: 10,
    height: 45,
  },
  btnRow: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  submitBtn: {
    margin: '25px 0 0 0',
  },
  itemContainer: {
    marginTop: 40,
  },
  itemCard: {
    padding: theme.spacing(2),
  },
  orangeItem: {
    backgroundColor: '#ffecb3',
    padding: theme.spacing(2),
    borderLeft: '4px solid orange',
  },
  studentBtn: {
    color: '#3f51b5',
    marginLeft: 26,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  infoicon: {
    marginRight: 5,
    color: 'orange',
  },
  itemRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  heading: {
    backgroundColor: theme.palette.primary.main,
  },
  smallCard: {
    border: '1px solid #999999',
    flex: 1,
    margin: '0 10px 0 10px',
    borderRadius: 0,
  },
  rightCard: {
    border: '1px solid #999999',
    flex: 3,
    margin: '0 10px 0 10px',
    borderRadius: 0,
  },
  headingText: {
    color: 'white',
  },
  outerDiv: {
    margin: '20px 0',
    padding: 20,
    paddingBottom: 40,
    borderBottom: '1px solid #e0e0e0',
  },
  inputContainer: {
    width: '95%',
    padding: '20px 0 20px 0',
  },
  textFieldInput: {
    width: '100%',
    height: 40,
  },
  textField: {
    width: '100%',
    marginTop: 5,
  },
  saveBtn: {
    marginLeft: 20,
    marginBottom: 15,
    height: 45,
  },
}));

export default useStyles;
