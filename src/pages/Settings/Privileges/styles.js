import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  cardHeader: {
    backgroundColor: theme.palette.primary.main,
    height: 20,
  },
  cardHeaderTitle: {
    color: 'white',
  },
  uploadBtn: {
    marginRight: 10,
    height: 25,
  },
  btnRow: {
    marginTop: 10,
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
  cardHeadingTitle: {
    color: 'white',
  },
  smallCard: {
    flex: 1,
    margin: '0 10px 0 10px',
  },
  rightCard: {
    flex: 3,
    margin: '0 10px 0 10px',
  },
  text: {
    fontSize: 15,
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
  card: {
    height: '100%',
    width: '100%',
  },
  required: {
    color: 'red',
  },
  select: {
    width: '30%',
    height: 40,
  },
  itemHeading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftHeading: {
    flex: 1.5,
    backgroundColor: 'white',
    height: 40,
    borderRadius: 0,
    paddingLeft: 5,
    paddingBottom: 10,
  },
  rightHeading: {
    flex: 1,
    backgroundColor: 'white',
    height: 40,
    borderRadius: 0,
    paddingLeft: 5,
    paddingBottom: 10,
  },
  headingText: {
    fontSize: 17,
    fontWeight: 'bolder',
    marginBottom: 10,
    fontFamily: theme.typography.fontFamily,
  },
  content: {
    // padding: '0 10px 0 10px',
    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'flex-start',
  },
  sectionHeading: {
    padding: 10,
    fontSize: 21,
    fontWeight: '400',
    fontFamily: theme.typography.fontFamily,
    border: '1px solid #e0e0e0',
    margin: 0,
    backgroundColor: '#f5f5f5',
  },
  sectionText: {
    padding: 10,
    fontSize: 14,
    fontFamily: theme.typography.fontFamily,
    border: '1px solid #e0e0e0',
    margin: 0,
    backgroundColor: 'white',
  },
}));

export default useStyles;
